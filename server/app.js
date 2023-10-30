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
    signupPage,
    signupAsResident,
    signupAsWorker
} = require('./controllers/signup.controller');
const {
    homePage
} = require('./controllers/home.controller');

app.use(morgan('dev'))

app.get('/',preLoginPage);

app.get('/login',loginPage);
app.post('/login',loginPage);

app.get('/signup',signupPage);
app.get('/professional_signup',signupAsWorker);
app.get('/resident_signup',signupAsResident);
app.post('/login',loginVer);

app.get('/home',homePage);


module.exports = app;