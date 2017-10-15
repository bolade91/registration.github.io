var express = require("express"),
    bodyParser = require("body-parser"),
    mysql = require('mysql');
    
app = express();
var port = process.env.PORT || 2020;
/*var connection = mysql.createConnection(process.env.JAWSDB_URL);
connection.connect(function(err) {
    if (err) {
        console.log(err);
        console.log("Error connecting database");
    }
});*/

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "teddybravoç&",
	database: "test"
});
connection.connect(function(err) {
    if (err) {
        console.log(err);
        console.log("Error connecting database");
    }
});

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/sub", function(req, res){
	res.render("submit.ejs");
});

app.post("/insert", function(req, res){
	console.log(req.body);
	console.log(req.files);
	var data={
		name: req.body.nom,
		telephone: req.body.tel,
		description: req.body.des,
		cv: req.body.cv,
		img: req.body.pic
	};
	console.log(data);
	var query="insert into jobber set ? ";
	connection.query(query, data, function (err, result) {
	    if (err) 
	    	throw err;
	    console.log("1 record inserted");
	});
	console.log("name = "+req.body.nom);
	res.redirect("/sub");
});

app.listen(port, function() {
    console.log("server listening on port " + port);
});
