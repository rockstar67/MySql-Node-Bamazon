//Requiring packages to run application
var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require("columnify");
//Initiating connection with MySQL database
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "Loslocos459$",
	database: "bamazon_DB"
});
//Error function if connection not successful else log connected ID
connection.connect(function (err) {
	if (err) throw err;
	console.log("connected as id " + connection.threadId + "\n");
});

//Selecting all products from database table and using columnify to display data in columns
connection.query("SELECT * FROM products", function (err, data) {
	if (err) { console.log(err) }
	console.log(columnify(data, { columnSplitter: "|" }));
	//Prompting user to enter values on terminal for product ID and quantity
	inquirer.prompt([
		{
			type: "input",
			name: "item_id",
			message: "What is the product id you would like to buy?",
		},
		{
			type: "input",
			name: "quantity",
			message: "How many would you like?",
			validate: function (input) {
				return !(isNaN(parseFloat(input)));
			}
		}
		//Prompting user to enter data then getting information entered by user
	]).then(function (response) {
		//Getting information from database using data entered by user
		connection.query(
			"SELECT * FROM products WHERE item_id=" + response.item_id,
			//Information saved in resp variable returning either error or response
			function (err, resp) {
				if (err) throw err;
				console.log(resp);
				//If quantity is greater than or equal to inventory 
				if (resp[0].stock_quantity >= response.quantity) {
					//When inventory is sufficient tell 
					console.log("We have that in stock!")
					connection.query(
						//Update database inventory by subtracting user quantity from stock quantity
						`UPDATE products SET \`stock_quantity\`=${resp[0].stock_quantity} - ${response.quantity} WHERE \`item_id\`=${response.item_id}`,
						//Function to check if update was successful
						function (err) {
							//If update was unsuccessful log error returned by function
							if (err) {
								console.log(err)
								//If update successful log total cost to customer
							} else {
								console.log(`Your total cost is $ ${resp[0].price * response.quantity}`)
							}
						}

					)
				}
				//If inventory is insufficient inform customer
				else { console.log("Sorry we are low on inventory.") }
				//Closing out connection to database
				connection.end()
			}

		);
	})
})
