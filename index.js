const path = require('path');
const express = require('express');
const bodyParser = require("body-parser");
const session = require("express-session");
const { injectIsAuthenticated, emptySessionFromStore, signin, signup } = require('./auth');
const store = require('./store');
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/testas");

let app = express();
// session config
app.use(
    session({
        name: store.sessionName,
        secret: store.sessionSecret,
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: false,
            maxAge: store.sessionMaxAge
        }
    })
);
// static config
app.use('/static', express.static('static'));
// reqBody config
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes config
app.get('/', injectIsAuthenticated, (req, res) => {
    if (req.isAuthenticated)
        res.redirect('/home');
    else 
        res.redirect('/signin');
});
app.get('/signin', injectIsAuthenticated, (req, res) => {
    if (req.isAuthenticated)
        res.redirect('/home');
    else 
        res.sendFile(path.join(__dirname, '/static', 'signin.html'));
});
app.get('/signup', injectIsAuthenticated, (req, res) => {
    if (req.isAuthenticated)
        res.redirect('/home');
    else 
        res.sendFile(path.join(__dirname, '/static', 'signup.html'));
});
app.get('/home', injectIsAuthenticated, (req, res) => {
    if (req.isAuthenticated)
        res.sendFile(path.join(__dirname, '/static', 'home.html'));
    else 
        res.redirect('/signin');
});
app.get('/logout', emptySessionFromStore, (req, res) => {
    res.status(200).send({
        msg: 'Success'
    })
});
app.post('/signin', signin);
app.post('/signup', signup);

app.listen(5000);