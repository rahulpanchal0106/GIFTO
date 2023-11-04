const express = require('express')
const morgan = require('morgan')
const path = require('path');

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
    signupAsWorker,
    signup
} = require('./controllers/signup.controller');
const {
    homePage, 
    createEvent
} = require('./controllers/home.controller');
const auth = require('./middlewares/auth');
const getEvents = require('./controllers/allEvents.controller');

app.use(express.json());
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname,'..','client','pages')));

app.get('/',preLoginPage);

app.get('/login',loginPage);
app.post('/login',loginVer);

app.get('/signup',signupPage);
app.get('/professional_signup',signupAsWorker);
app.get('/resident_signup',signupAsResident);
app.post('/resident_signup',signup);
app.post('/login',loginVer);

app.get('/home',homePage); //removed auth middleware
app.post('/home',createEvent); //removed auth middleware

app.get('/allEvents',getEvents);


module.exports = app;