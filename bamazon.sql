DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT  NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (item_id)
);

Select * FROM bamazon.products;

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (101, 'Student Pack', 'Books', 200.00, 100),
        (202, 'Energy drinks', 'Food and Drink', 24.00, 25),
        (312, 'Tablets', 'Electronics', 399.00, 50),
        (420, 'Backpack', 'Apparel', 40.00, 35),
        (503, 'Student life', 'Books', 15.00, 25),
        (619, 'Push scooter', 'Sporting', 50.00, 30),
        (720, 'Throw blanket', 'Apparel', 35.00, 50),
        (808, 'Snack pack', 'Food and Drink', 15.00, 50),
        (912, 'Monopoly board', 'Games', 25.00, 30),
        (1010, 'Music pass', 'Electronics', 60.00, 50)



-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
