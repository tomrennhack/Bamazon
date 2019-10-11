# Bamazon

Week 12 Homework - Node.JS and MySQL - Bamazon eCommerce App

## Installation

The following are required to run this app:

```javascript
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
```

Also, make sure the DB has been run, otherwise the app will have no server to connect to.

## Usage

After you intall the required items above into the folder containing the app:

Go to MySQL and run the server to make sure you can connect to it.

In the app folder and using your console, enter "node bamazonCustomer.js" to run the app.

You will be presented with a list of 10 items for purchase, including their ID#, name and price.

Select an item by entering the ID# in the prompt (inquirer used for this portion).

Enter a quantity that you would like to purchase.

If that quantity is available, you will be presented with a summary of your purchase and the total cost.

If that quantity is NOT available, you will get an apology and it will bring you back to the listing of items.

When the purchase goes through, the DB is updated to reflect the remaining stock.

### Usage - Video Demo

[CLICK HERE](https://youtu.be/l03KE13utn8) for a demo of the app in action!

## Thank you

Thank you very much for checking out my app!