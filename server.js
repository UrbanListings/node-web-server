const express = require('express');
const hbs = require ('hbs');
const fs= require('fs');

var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
// ########################################
// ########## MiddleWare Code #############
// ########################################
app.use(express.static(__dirname + '/public'));

// ############ Middleware #################
app.use((request, response, next) => {
    var now = new Date().toString();
    console.log(request.method);
    next();
});

// ############## api ########################
app.get('/new', (request, response) =>{
   // response.send('<h1>Hello Express </h1>');
    response.send({
        name: 'Gaurav',
        likes: ['Coding',
        'Business']
    });
});

app.get('/', (request, response) => {
    response.render('home.hbs',{
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to Hautel',
        currentYear: new Date().getFullYear()
    });

});

app.get('/about', (request, response) => {
   // response.send('About Page');
    response.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (request, response) => {
    response.send({
        errorMessage: 'Unable to process the Request'
    });
});

app.listen(3000, () => {
    console.log('Server is Ready and running:.....');
});

