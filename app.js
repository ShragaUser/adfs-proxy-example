var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const configurePassport = require("./passport");
const passport = require('passport');
var router = require('./routes/index');
var authRouter = require('./routes/auth');
var usersRouter = require('./routes/users');
const session = require("express-session")

var app = express();

//app.set('trust proxy', 1) // trust first proxy

configurePassport();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))


app.use(passport.initialize());
app.use(passport.session());


app.use('/auth', authRouter);
app.use((req, res, next) => {
    if (!req.user)
        res.redirect("/auth")
    else
        next();
})
app.use('/', router);
app.use('/users', usersRouter);


module.exports = app;