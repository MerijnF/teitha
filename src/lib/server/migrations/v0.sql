-- create campaigns table
CREATE TABLE campaigns (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL
) STRICT;
-- create assets table
CREATE TABLE assets (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    file_name TEXT NOT NULL,
    campaign_id INTEGER,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(_id)
) STRICT;
-- create notes table
CREATE TABLE notes (
    _id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    category TEXT NOT NULL,
    name TEXT NOT NULL,
    file_name TEXT NOT NULL,
    campaign_id INTEGER,
    FOREIGN KEY (campaign_id) REFERENCES campaigns(_id)
) STRICT;
-- first migration create migrations table
CREATE TABLE migrations(migration TEXT PRIMARY KEY, date TEXT) WITHOUT ROWID,
STRICT;
-- insert migration
INSERT INTO migrations
VALUES ('v0', datetime());