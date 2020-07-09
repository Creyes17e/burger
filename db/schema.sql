CREATE DATABASE IF NOT EXISTS burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id int auto_increment primary key,
burger_name varchar(100) not null,
devoured boolean 
)