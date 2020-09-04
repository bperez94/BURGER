DROP DATABASE IF EXISTS bl8skx6b39wqvs51;

CREATE DATABASE bl8skx6b39wqvs51;

USE bl8skx6b39wqvs51;

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);