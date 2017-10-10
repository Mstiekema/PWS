var bodyParser = require('body-parser');
var express = require('express')
var mysql = require('mysql')
var path = require('path')
var app = express()

// MySQL
var conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'password',
	database: 'pws',
	port: 3306
});

conn.connect(function(err) {
	if(err) return console.log('Database connection error: ', err);
	console.log('MySQL connection successful')
});

// Website defaults
app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'templates'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Webpages
app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/talen', function (req, res) {
  res.render('info.html')
})

app.get('/zoek/:zoek', function (req, res) {
  res.render('zoek.html', {zoek: req.params.zoek})
})

app.get('/login', function (req, res) {
  res.render('login.html', {type: 'login'})
})

app.get('/login/new', function (req, res) {
  res.render('login.html', {type: 'new'})
})

// Posts
app.post('/login', function(req, res) {
	conn.query('SELECT * FROM userinfo WHERE username = ?', req.body.username, function(err, result) {
		if (err || result[0] == undefined) return res.status(400).send('Username and/or password is incorrect') 
		if (req.body.password == result[0].password) {
			res.status(200).send('Successfully logged in!')
		}	else { 
			res.status(400).send('Incorrect password')
		}
	})
})

app.post('/login/new', function(req, res) {
	conn.query('INSERT INTO userinfo set ?', req.body, function(err, result) {
    if(err) return res.status(400).send('Kan account niet aanmaken')
    res.status(200).send('Account succesvol aangemaakt.')
	})
})

app.all('*', function(req, res, next) {
  res.render('error.html')
});

app.listen(1000, function () {
	console.log('Started PWS test project')
})