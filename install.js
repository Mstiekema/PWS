var mysql = require("mysql");

var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'pws',
	port: 3306
});

conn.query(
	'CREATE TABLE userinfo (' +
	'username VARCHAR(25) PRIMARY KEY,' +
	'password VARCHAR(25),' +
  'email VARCHAR(254),' +
	'UNIQUE (username))',
	function (err, result) {if (err) {return}}
)

conn.query(
	'CREATE TABLE uren (' +
	'username VARCHAR(25) PRIMARY KEY,' +
	'activiteit VARCHAR(254),' +
	'minuten INT,' +
	'UNIQUE (username))',
	function (err, result) {if (err) {return}}
)

console.log("[DEBUG] Alle tafels zijn toegevoegd.")

conn.end();