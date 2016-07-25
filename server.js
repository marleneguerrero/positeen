var express = require('express');
var ejs = require('ejs');
var bodyparser = require('body-parser');
//shows that this is the file that ejs should read/enter
var mongoose = require('mongoose');
// create a server 
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// the url we use to connect to the database
var uri = 'mongodb://brookiecookie:pass@ds027425.mlab.com:27425/heroku_jpk1gtxz';
//logs into database
mongoose.connect(uri);
//connects mongosse to the database/my account?
var db = mongoose.connection;
// 
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
	extended: true
}));

var entries = mongoose.model('entry', {text:String, date:String});
// creates the entries variable (the model of the entries)
//var entry1 = new entries ({text:"My lipstick is cute!", date:"7/21/16"});
// hard codes first entries entry

// gets info for entire site
app.get('/', function(req, res) {
	// gets everything in our entries collection
  	entries.find().lean().exec(function(err,doc){
  		// i is the length of a collection
    	var i = doc.length;
    	// iterates through the length of the variable i
    	if (err){
    		console.log("Error");
    	}
    	// if error occurs console reports it

    	else {
    		entriesResults=[];
    	// creates a dictionary

    		while(i--){
    			entriesResults.push ({
    			// iterates through the key and the value
    				text: doc[i].text,
    				date: doc[i].date
    			});
    		}
    			// renders the positeen website
    		res.render('positeen',{
    		//data from collection goes to webpage
    			entriesWebpage: entriesResults
    		});
    	}
   });
});

app.post('/',function(req,res){
	var thedate = req.body.date1;
	var thetext = req.body.text1;
	console.log(thedate);
	var entry1 = new entries ({text:thetext, date:thedate});
	entry1.save(function(err) {
	// saves the function
		if (err){
			console.log("there was an error");
		// if error occurs console tells user
		}
		else {
			console.log("entry was saved into the database");
		}
		// reports that the entry was saved into the database
	

	});
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost:' + port);
});
// tells user what host their website is on