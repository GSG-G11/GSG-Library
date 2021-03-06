
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

INSERT INTO users (username, email, password, isAdmin) VALUES (
    'dev.karamz',
    'zomlutk@gmail.com',
    '123',
    true
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


    INSERT INTO users (username, email,password, isAdmin) VALUES('mohamed', 'mohamed@gmail.com', '123456789',false);
    INSERT INTO users (username, email,password, isAdmin) VALUES('nada', 'nada@gmail.com', '$2b$10$GFL2sctVwvM8j6MswbwCxuMRdeNrw278dht.g3mt98N.391e6Sx7e',false);
    INSERT INTO users (username, email,password, isAdmin) VALUES('Amran', 'amran@gmail.com', '123456amo66',false);

    

    INSERT INTO favourit_books (user_id, book_id) VALUES (1,2);
    INSERT INTO favourit_books (user_id, book_id) VALUES (3,1);
    INSERT INTO favourit_books (user_id, book_id) VALUES (2,3);
    INSERT INTO favourit_books (user_id, book_id) VALUES (4,4);


    
COMMIT;

