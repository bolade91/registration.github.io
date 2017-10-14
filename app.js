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
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function(req, res){
  res.render("index");
});

app.listen(port, function() {
    console.log("server listening on port " + port);
});
