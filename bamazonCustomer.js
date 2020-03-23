var inquirer = require('inquirer');
var mysql = require('mysql');

// Define the MySQL connection parameters
var connection = mysql.createConnection({
	host: "localhost",
  	port: 3306,
  	user: "root",
  	password: "Loslocos459$",
  	database: 'bamazon_superDB'
})

// Initialze connection
connection.connect(function(err){
	if (err) throw err;
	console.log("connection good!");
	makeTable();
})

// Make table and print 
 var makeTable = function(){
	 connection.query("SELECT * FROM products", function(err,res){
		 for(var i=0; i<res.length; i++){
			 console.log(res[i].itemid+" || "+res[i].productname+" || "+
			 res[i].departmentname+" || "+res[i].price+" || "+res[i].
			 stockquantity+"\n");
		 }
	promptCustomer(res);
	 })
 }

// Prompt customer for purchase input
// Make function for product choice
// Inquirer prompt for how many products to buy
// Create function for how many products bought
// If user selects Quit then will exit
// If user selects no valid product name then not a valid selection


 








