const express = require('express')
const morgan = require('morgan')

const app = new express();

const {
    preLoginPage
} = require('./controllers/preLogin.controller');
const {
    loginVer,
    loginPage
} = require('./controllers/login.controller');
const {
    signupPage
} = require('./controllers/signup.controller');
const {
    homePage
} = require('./controllers/home.controller');

app.get('/',preLoginPage);

app.get('/login',loginPage);
app.get('/signup',signupPage);
app.post('/',loginVer);

app.get('/home',homePage);


module.exports = app;