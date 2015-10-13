// Requires \\
var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mycompanyname');
// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\

app.get('/', function(req, res) {
	res.sendFile('html/index.html', {root : './public'});
});

// displays a list of applicants
app.get('/getapplicants', function(req, res){
	NewApplicant.find({}, function(err, data){
		if(err){
			console.log("error!!")
		}
		else{
			res.send(data)
		}
	})
})

app.get('/applicants', function(req, res){
	res.sendFile('html/applicants.html', {root : './public'});
});

// creates and applicant
app.post('/applicant', function(req, res){
	console.log(req.body)
	var newGuy = new NewApplicant(req.body);
	newGuy.save(function(err){
		if(err){
			console.log('error!');
		}
	})
	// Here is where you need to get the data
	// from the post body and store it in the database
	res.redirect('/success');
});

app.get('/success', function(req, res){
	res.send("Super Success!!")
})
// app.get('/applicants', function(req, res){
	// res.send(req.body)

// })

var NewApplicant = mongoose.model('NewApplicant',
	{ name : String,
	bio : String,
	skills : String, 
	years : Number,
	why: String,
	}
)
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})