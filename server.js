// dependencies
const express = require("express");
const app = express();
const path = require("path");

//define PORT
const PORT = process.env.PORT || 3002;

app.get("/", function(res, res){
    res.render("index");
});

app.listen(PORT, function(){
    console.log("Star listening on port: " + PORT);
});