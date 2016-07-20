var express = require('express');
var ejs = require('ejs');

var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    var dogList = [
        { name: 'Skip', age: 3 },
        { name: 'Rufus', age: 5 },
        { name: 'Buddy', age: 10 }
    ];
   
    res.render('positeen', {
        doggies: dogList
    });
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});