BEGIN;

DROP TABLE IF EXISTS users, books, favourit_books CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    isAdmin BOOLEAN NOT NULL
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    description TEXT NOT NULL,
    category VARCHAR(100) NOT NULL,
    image VARCHAR(255) NOT NULL,
    author VARCHAR(150) NOT NULL
);

CREATE TABLE favourit_books (
    id SERIAL PRIMARY KEY,
    user_id INT,
    book_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO
    books (name, description, category, image, author)
    values
    (
        'The Diary of a Young Girl',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        'History',
        'shorturl.at/mHSZ5',
        'Anne Frank'
    ),
    (
        'Night (The Night Trilogy, #1)',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        'Classics',
        'shorturl.at/ovDQ9',
        'Elie Wiesel'
    ),
    (
        'To Kill a Mockingbird',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        'Arts',
        'shorturl.at/imAF7',
        'Harper Lee'
    ),
    (
        'The Great Gatsby',
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
        'Classics',
        'shorturl.at/rsSX9',
        'F.Scott Fitzgerald'
    );

COMMIT;

