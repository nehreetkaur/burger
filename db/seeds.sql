INSERT INTO burgers (burger_name,devoured) VALUES ("CHEESE Burger",false);
INSERT INTO burgers (burger_name,devoured) VALUES ("Chicken Burger",false);
INSERT INTO burgers (burger_name,devoured) VALUES ("Veggie Burger",false);
INSERT INTO burgers (burger_name,devoured) VALUES ("Fish Fillet Burger",false);
INSERT INTO burgers (burger_name,devoured) VALUES ("Bacon Burger",false);


// Queries

SELECT * FROM burgers;
--  update query

UPDATE burgers SET devoured=1 WHERE id=1;


