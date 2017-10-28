// dependencies
const express = require("express");
const app = express();
const request = require("request");
const path = require("path");
const exphbs = require("express-handlebars");

//define PORT
const PORT = process.env.PORT || 3002;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//let express to serve static files
app.use(express.static(path.join(__dirname,"public")));

app.get("/", function(res, res){
    res.render("index");
});

app.listen(PORT, function(){
    console.log("Star listening on port: " + PORT);
});