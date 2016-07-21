var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
var uri = 'mongodb://brookiecookie:pass@ds027425.mlab.com:27425/heroku_jpk1gtxz';
mongoose.connect(uri);
var db = mongoose.connection;
// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
var journal = mongoose.model('entry', {text:String, date:String});
var entry1 = new journal ({text:"My lipstick is cute!", date:"7/21/16"});

entry1.save(function(err){
	if (err){
		console.log("there was an error");
	}
	else {
		console.log("entry was saved into the database");
	}
});

app.get('/', function(req, res) {
    // var journalList = [
    //     { name: 'Brooke', date: "10/12/99" },
    //     { name: 'Selah', date: "1/1/17" },
    //     { name: 'Marlene', date: "2/10/99" }
    // ];
   
    // res.render('positeen', {
    //     journal: journalList
    // });

  /*journal.find().lean().exec(function(err,doc){
    	var dataArr = [];
    	var i = doc.length;

    	if (err){
    		console.log("Error");
    	}

    	else {
    		journalResult=[]

    		while(i--){
    			journalResults.push ({
    				text: doc[i].text,
    				date: doc[i].date
    			});
    		}
    		res.render('positeen',{
    			journal: journalResults
    		});
    	}
    });*/

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});