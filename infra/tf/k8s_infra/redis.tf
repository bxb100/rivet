locals {
	redis_k8s = var.redis_provider == "kubernetes"

	redis_svcs = local.redis_k8s ? {
		for k, v in var.redis_dbs:
		k => {
			persistent = v.persistent
			password = module.redis_secrets[0].values["redis/${k}/password"]
		}
		if local.redis_k8s
	} : {}
}

module "redis_secrets" {
	count = local.redis_k8s ? 1 : 0

	source = "../modules/secrets"

	keys = [
		for k, v in var.redis_dbs: "redis/${k}/password"
	]
}

resource "kubernetes_namespace" "redis" {
	for_each = var.redis_dbs

	metadata {
		name = "redis-${each.key}"
	}
}

resource "helm_release" "redis" {
	for_each = local.redis_svcs

	name = "redis"
	namespace = kubernetes_namespace.redis[each.key].metadata.0.name
	chart = "../../helm/redis-cluster"
	# repository = "https://charts.bitnami.com/bitnami"
	# chart = "redis-cluster"
	# version = "9.0.6"
	values = [yamlencode({
		password = each.value.password
		global = {
			storageClass = var.k8s_storage_class
		}
		# TODO: Allow this to be configured
		# Create minimal cluster
		cluster = {
			nodes = 3
			replicas = 0
		}
		auth = {
			enable = true
		}
		tls = {
			enabled = true
			authClients = false
			autoGenerated = true
		}
		persistence = {
			enabled = each.value.persistent
		}
		metrics = {
			enabled = true
			serviceMonitor = {
				enabled = true
				namespace = kubernetes_namespace.redis[each.key].metadata.0.name
			}
			# TODO:
			# prometheusRule = {
			# 	enabled = true
			# 	namespace = kubernetes_namespace.redis[each.key].metadata.0.name
			# }
		}
	})]
}

data "kubernetes_secret" "redis_ca" {
	for_each = var.redis_dbs

	depends_on = [helm_release.redis]

	metadata {
		name = "redis-redis-cluster-crt"
		namespace = kubernetes_namespace.redis[each.key].metadata.0.name
	}
}

resource "kubernetes_config_map" "redis_ca" {
	for_each = merge([
		for ns in ["rivet-service", "bolt"]: {
			for k, v in var.redis_dbs:
				"${k}-${ns}" => {
				db = k
				namespace = ns
			}
		}
	]...)

	metadata {
		name = "redis-${each.value.db}-ca"
		namespace = each.value.namespace
	}

	data = {
		"ca.crt" = data.kubernetes_secret.redis_ca[each.value.db].data["ca.crt"]
	}
}

