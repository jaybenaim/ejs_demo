var express = require('express'); 
var app = express(); 

app.get("/", function(req,res) { 
    res.render("home.ejs");  
}); 

app.get("/welcomeback/:name", function(req,res) { 
    var user = req.params.name;
    res.render("welcomeback.ejs", { userVar: user});  
}); 

app.get("/posts", function(req,res) { 
    var posts = [ 
        { title: "Post 1", author: "Jacobi"}, 
        { title: "Post 2", author: "Jack"}, 
        { title: "Post 3", author: "Josh"}, 
    ]; 
    var clips = [
        { title: "Clip 1", author: "Jones"}, 
        { title: "Clip 2", author: "Jim"}, 
        { title: "Clip 3", author: "John"}, 

    ]
    // var strings = JSON.stringify(posts); 
    res.render("posts.ejs", {
        posts: posts,
         clips:clips
        }); 
}); 

app.listen(3000, function() { 
    console.log("Server is on localhost:3000"); 
}); 