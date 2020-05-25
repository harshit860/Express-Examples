const express = require('express');

const app = express();

// Middleware or function executers
app.use('/posts',()=>{
    console.log("on post you are")
})

// Routes
app.get( '/' , (req,res) => {
    res.send("Welcome harshit")
})

app.get( '/posts' , (req,res) => {
    res.send("We are on posts")
})

// Listening the app

app.listen(3000);
