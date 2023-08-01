DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    song_name TEXT,
    artist TEXT,
    album TEXT,
    song_time TEXT,
    is_favorite BOOLEAN,
    song_image TEXT
);