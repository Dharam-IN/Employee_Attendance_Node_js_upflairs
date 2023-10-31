CREATE DATABASE attendance;

CREATE TABLE employees (
    user_name VARCHAR(255) NOT NULL PRIMARY KEY,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

--insert dummy users

INSERT INTO employees(user_name, user_email, user_password) VALUES ('dharam', 'dharam@gmail.com', '12345');


