import { Hono } from "hono";
import { upgradeWebSocket } from "hono/deno";
import { assertExists } from "@std/assert";

// Setup Hono app
const app = new Hono();

app.get("/health", (c) => {
	return c.text("ok");
});

app.get(
	"/ws",
	upgradeWebSocket((c) => {
		return {
			onOpen(_event, ws) {
				ws.send(
					JSON.stringify([
						"init",
						{
							forwardedFor: c.header("x-forwarded-for"),
						},
					]),
				);
			},
			onMessage(event, ws) {
				if (typeof event.data === "string") {
					const [eventType, data] = JSON.parse(event.data.slice(0, 2 ** 13));
					switch (eventType) {
						case "ping":
							ws.send(JSON.stringify(["pong", data]));
							break;
						default:
							console.warn("unknown event", eventType);
							break;
					}
				}
			},
		};
	}),
);

// Start server
export default {
	async start() {
		// Automatically exit after 1 minute in order to prevent accidental spam
		setTimeout(() => {
			console.error(
				"Actor should've been destroyed by now. Automatically exiting.",
			);
			Deno.exit(1);
		}, 60 * 1000);

		// Find port
		const portEnv = Deno.env.get("PORT_HTTP");
		assertExists(portEnv, "missing PORT_HTTP");
		const port = Number.parseInt(portEnv);

		// Start server
		console.log(`Listening on port ${port}`);
		const server = Deno.serve({ port }, app.fetch);
		await server.finished;
	},
};
