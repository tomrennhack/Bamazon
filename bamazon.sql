DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INTEGER(10) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(30) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price INT NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
	("Broom", "Household", 10, 20),
  ("Shovel", "Household", 40, 20),
  ("Hat", "Fashion", 25, 20),
  ("Sneakers", "Fashion", 100, 20),
  ("Sunglasses", "Fashion", 50, 20),
  ("Hot dog", "Food", 2.5, 20),
  ("Hamburger", "Food", 5, 20),
  ("Popcorn", "Food", 3, 20),
  ("Garbage can", "Household", 10, 20),
  ("Diamond ring", "Fashion", 2500, 5);

SELECT * FROM products;

