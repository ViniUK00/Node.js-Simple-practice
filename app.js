const express = require('express');
const bodyParser = require('body-parser'); // process data sent in an HTTP request body
// middleware for parsing JSON, 
// Text, URL-encoded, and raw data sets over an HTTP request body.
const { urlencoded } = require('body-parser');

const app = express();

app.set('view engine', 'ejs'); // Tell to express the parsing  should be EJS
app.set('views', 'views') // Tell to express where to find the views

app.use(bodyParser.urlencoded({extended: false}));
// Middleware for parsing URL-encoded over an HTTP request body.

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/html')
    next();
});

app.use((req, res, next) => {
    const userName = req.body.userName || 'Unknown user'
    res.render("index", {
      user: userName,
    }); // Render EJS FILE NAMED INDEX
});

app.listen(3000);