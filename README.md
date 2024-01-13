# Checkout Cart with TDD

This project demonstrates how to implement a checkout cart using Test-driven development (TDD). TDD is a software development process that focuses on writing tests before writing code. This helps to ensure that the code is well-designed and bug-free.

The checkout cart in this project has the following features:
- Can add items or multiple items
- Can add item prices
- Can calculate the total
- Can add and apply discount codes

The test suite for the checkout cart covers all of its features. This ensures that the code is well-tested and reliable.

## Installation
To run the project, you will need Node.js and npm installed on your computer. Once you have Node.js and npm installed, you can install the project dependencies by running the following command in the project directory:

> npm install

## Running the Tests
To run the tests, you can run the following command in the project directory:

> npm test

## Usage
To use the checkout cart, you can create an instance of the Checkout class and then add items and prices using the `addItemPrice()` and `addItem()` methods. You can then calculate the total cost using the `calculateTotal()` method.

For example, the following code adds an item named "apple" with a price of $1.00 to the checkout cart:
```
const checkout = new Checkout();
checkout.addItemPrice("apple", 1.00);
checkout.addItem("apple");
```
The following code calculates the total cost of the checkout cart:
```
const total = checkout.calculateTotal();
console.log(total); // Output: 1.00
```


## Changelog
- v1.0.0: Initial release