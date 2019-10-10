// ======================================================
// required
// ======================================================
// require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");

// ======================================================
// set connection to mySQL DB
// ======================================================
var con = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Fartdog90s",
    database: "bamazon_DB"
});

// ======================================================
// connect to the connection
// ======================================================
con.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});  

function start() {
    con.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        
        // create empty tableArr
        var tableArr = [];

        // go through results and add object for each product to the tableArr
        for (var i = 0; i < results.length; i++) {
            tableArr.push({"ID#": results[i].item_id, "Product": results[i].product_name, "Price": results[i].price});
        }

        // return tableArr
        console.log(tableArr);
        purchaseProduct();
    })
}

function purchaseProduct () {
    // query the db for all items available for sale
    con.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;

        // use inquirer to ask user for productChoice and quantityChoice
        inquirer
            .prompt([
                {
                    name: "productChoice",
                    type: "input",
                    message: "What is the ID# of the Product you would like to purchase?"
                },
                {
                    name: "quantityChoice",
                    type: "input",
                    message: "How many would you like to purchase?"
                }
            ])  
            .then(function(answer) {

                // get the information of the chosen product
                var chosenProd;

                for (var i = 0; i < results.length; i++) {
                    // find selected product by item_id and set to chosenProd var
                    if (results[i].item_id == answer.productChoice) {
                        chosenProd = results[i];
                    }
                }
        
                // determine if quantity is available
                if (chosenProd.stock_quantity >= parseInt(answer.quantityChoice)) {
                    // quantityChoice is available, update db, let the user know, and start over
                    con.query(
                        "UPDATE products SET ? WHERE ?", [
                            { stock_quantity: chosenProd.stock_quantity - answer.quantityChoice },
                            { item_id: chosenProd.item_id }
                        ],
                        function(error) {
                            if (error) throw err;
                            console.log("---------------\nYour purchase has been processed!\nItem:", chosenProd.product_name, "\nQty:", answer.quantityChoice, "\nUnit Price: $", chosenProd.price, "\nTOTAL COST: $", answer.quantityChoice * chosenProd.price, "\n---------------");
                            start();
                        }
                    );
                }
                else {
                    // quantity is not available, so apologize and start over
                    console.log("Sorry, we have insufficient stock to fulfill your request! Please try again...");
                    start();
                }
            });
    });
}