ALTER TABLE users
	ADD COLUMN is_searchable BOOLEAN NOT NULL DEFAULT FALSE,
	DROP COLUMN display_name_len;
