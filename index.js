var express = require('express'); 
var app = express(); 

// make the css in public folder work 
app.use(express.static("public")); 
// let app know the files are .ejs 
app.set("view engine", "ejs"); 

app.get("/", function(req,res) { 
    res.render("home");  
}); 

app.get("/welcomeback/:name", function(req,res) { 
    var user = req.params.name;
    res.render("welcomeback", { userVar: user});  
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
    // to see full object in html 
    // var strings = JSON.stringify(posts); 
    res.render("posts", {
        posts: posts,
         clips:clips
        }); 
}); 

app.listen(3000, function() { 
    console.log("Server is on localhost:3000"); 
}); 