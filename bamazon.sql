DROP DATABASE IF EXISTS bamazon_superDB;

CREATE DATABASE bamazon_superDB;

USE bamazon_superDB;

CREATE TABLE products (
  item_id INTEGER(11) AUTO_INCREMENT  NOT NULL,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(11) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Student Pack', 'Books', 200.00, 100),
        ('Energy drinks', 'Food and Drink', 24.00, 25),
        ('Tablets', 'Electronics', 399.00, 50),
        ('Backpack', 'Apparel', 40.00, 35),
        ('Student life', 'Books', 15.00, 25),
        ('Push scooter', 'Sporting', 50.00, 30),
        ('Throw blanket', 'Apparel', 35.00, 50),
        ('Snack pack', 'Food and Drink', 15.00, 50),
        ('Monopoly board', 'Games', 25.00, 30),
        ('Music pass', 'Electronics', 60.00, 50),



-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
