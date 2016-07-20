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
    var journalList = [
        { name: 'Brooke', date: "10/12/99" },
        { name: 'Selah', date: "1/1/17" },
        { name: 'Marlene', date: "2/10/99" }
    ];
   
    res.render('positeen', {
        journal: journalList
    });
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});