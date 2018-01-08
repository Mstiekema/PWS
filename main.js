var bodyParser = require('body-parser');
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var net = require('net');
var session = require('express-session');

var app = express()
var client = new net.Socket();

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
app.use(session({ secret: 'secretpassword', resave: false, saveUninitialized: false}))

// Function to check if user is logged in or not
var checkLogin = function(req, res, next) {
  if (req.session && req.session.logged) {
    return next();
  } else {
    return res.render('error.html', {status: 401});
	}
};

app.all('*', function(req, res, next) {
  res.locals.user = {
		user: req.session.user,
		logged: req.session.logged
	}
  next()
});

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

app.get('/uitleg/:ondw', function (req, res) {
  res.render('uitleg.html', {uitleg: req.params.ondw})
})

app.get('/paint', function (req, res) {
  res.render('paint.html')
})

app.get('/uren/:user', function (req, res) {
	conn.query('SELECT * FROM uren WHERE username = ? ORDER BY datum', req.params.user, function(err, result) {
		var tInfo = new Object();
		tInfo.user = req.params.user
		// Totale tijd
		var tTot = 0;
		for (i = 0; i < result.length; i++) {
			tTot += result[i].minuten
		}
		var h = Math.floor(tTot / 60)
		var m = Math.floor(tTot % 60)
		tInfo.hours = h, tInfo.minutes = m
		// Gemiddelde
		var gem = tTot / result.length
		var h = Math.floor(gem / 60)
		var m = Math.floor(gem % 60)
		tInfo.avHours = h, tInfo.avMinutes = m
		res.render('uren.html', {res: result, tInfo: tInfo})
	})
})

app.get('/uren', function (req, res) {
	conn.query('SELECT * FROM uren ORDER BY datum', function(err, result) {
		var tInfo = new Object();
		tInfo.user = "all"
		// Graph
		tInfo.all = {}
		result.map(function(a) {
			tInfo.all[a.username] = 0
		})
		result.map(function(a) {
			tInfo.all[a.username] += a.minuten
		})
		// Totale tijd
		var tTot = 0;
		for (i = 0; i < result.length; i++) {
			tTot += result[i].minuten
		}
		var h = Math.floor(tTot / 60)
		var m = Math.floor(tTot % 60)
		tInfo.hours = h, tInfo.minutes = m
		// Gemiddelde
		var gem = tTot / result.length
		var h = Math.floor(gem / 60)
		var m = Math.floor(gem % 60)
		tInfo.avHours = h, tInfo.avMinutes = m
		res.render('uren.html', {res: result, tInfo: tInfo})
	})
})

app.get('/login', function (req, res) {
  res.render('login.html', {type: 'login'})
})

app.get('/login/new', function (req, res) {
  res.render('login.html', {type: 'new'})
})

app.get('/logout', function(req, res) {
	req.session.destroy();
	res.redirect('/#logout')
})

// Posts
app.post('/login', function(req, res) {
	conn.query('SELECT * FROM userinfo WHERE username = ?', req.body.username, function(err, result) {
		if (err || result[0] == undefined) return res.status(400).send('Username en/of wachtwoord is niet correct')
		if (req.body.password == result[0].password) {
			req.session.user = req.body
			req.session.logged = true
			res.status(200).send('Succesvol ingelogd')
		}	else {
			res.status(400).send('Incorrect wachtwoord')
		}
	})
})

app.post('/login/new', function(req, res) {
	conn.query('SELECT * FROM userinfo WHERE username = ?', req.body.username, function(err, result) {
		if (result[0] != undefined) return res.status(400).send('Username bestaat al in de database')
		conn.query('INSERT INTO userinfo set ?', req.body, function(err, result) {
			req.session.user = req.body
			req.session.logged = true
			res.status(200).send('Account succesvol aangemaakt.')
		})
	})
})

app.post('/uren', function(req, res) {
	console.log(req.body)
	req.body.username = req.session.user.username
	var permittedUsers = ["Mstiekema", "Jelte_akker", "JitzeO"]
	if (permittedUsers.indexOf(req.body.username) != -1) {
		conn.query('INSERT INTO uren set ?', req.body, function(err, result) {
			res.status(200).send('Uren succesvol toegevoegd aan database.')
		})
	} else {
		res.status(401).send('Alleen Jelte, Jitze of Merijn mogen uren toevoegen aan de database.')
	}

})

app.all('*', function(req, res, next) {
  res.render('error.html')
});

app.listen(1000, function () {
	console.log('Started PWS test project')
})
