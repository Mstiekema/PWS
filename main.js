var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'static')));
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/info', function (req, res) {
  res.render('info.html')
})

app.all('*', function(req, res, next) {
  res.render('error.html')
});

app.listen(1000, function () {
	console.log('Started PWS test project')
})