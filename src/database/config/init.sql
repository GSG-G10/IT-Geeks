BEGIN;

DROP TABLE IF EXISTS posts, users CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email_address VARCHAR(100) NOT NULL,
    phono_no INTEGER NOT NULL,
    password VARCHAR(100) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    category VARCHAR NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    date_created DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (first_name, last_name, email_address, phono_no, password) VALUES
('ahmad', 'omar', 'ahmad@gmail.com', 0599999999, 'abcd123'),
('mo', 'salah', 'mosalah@gmail.com', 0599888888, 'abcd321'),
('ahmed', 'abadi', 'abadi@gmail.com', 0599777777, 'dcba321');


INSERT INTO posts (title, content, category, user_id) VALUES 
('9 Code Review Techniques', 'We all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build', 'Programming', 2),
('10 famous programming languages', 'We all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build', 'Tech', 1),
('DevOps', 'We all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build', 'DevOps', 3),
('DevOps', 'We all know we won’t get very far without a code review. It improves the quality of the code and makes its structure more stable. Reviews also help programmers build', 'DevOps', 3);;

COMMIT;