var express = require('express'); 
var app = express(); 

app.get("/", function(req,res) { 
    res.render("home.ejs");  
}); 
app.get("/welcomeback/:name", function(req,res) { 
    var user = req.params.name;
    res.render("welcomeback.ejs", { userVar: user});  
}); 


app.listen(3000, function() { 
    console.log("Server is on localhost:3000"); 
}); 