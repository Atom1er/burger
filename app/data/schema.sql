CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(50) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);

SELECT * FROM burgers;
UPDATE burgers SET devoured = false WHERE id=3;
UPDATE burgers SET devoured = false WHERE id=1;
UPDATE burgers SET devoured = false WHERE id=4;
UPDATE burgers SET devoured = false WHERE id=5;


INSERT INTO burgers(burger_name) VALUE('third Burger test');
INSERT INTO burgers(burger_name) VALUE('fourth Burger test');
INSERT INTO burgers(burger_name, devoured) VALUE('fifth Burger test', true);