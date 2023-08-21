const express = require('express');
const { engine } = require('express-handlebars');
const myconnection = require ('express-myconnection');
const mysql = require('mysql');
const session = require ('express-session');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');

const app = express();
app.set('port', 4000);

app.set('views', __dirname + '/views');
app.engine('.hbs', engine({
    extname: '.hbs',
}))
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.use (myconnection(mysql, {
    host: 'localhost',
    user: 'root',
    password:'',
    port:'3306',
    database:'proyectosetes'
}));

app.use(session({
    secret: 'secret',
    resave:'true',
    saveUninitialized: true
}));

app.listen(app.get('port'), () => {
    console.log('listening on port', app.get('port'));
});

app.get('/', (req, res) => {
    res.render('home');
});