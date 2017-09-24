const express = require('express');
const app = express();
const mongoose = require('mongoose');
var session = require('express-session');
var bodyParser = require('body-parser');
const path = require('path')
const config = require('./config/database')
//start connect database
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
    if (err) {
        console.log('Could Not connect to database : ', err);
    }
    else {
        console.log('Connect to database : ' + config.db);
    }
});
//start ejs set view
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
//start bodyParse and session
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ secret: config.secret, resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));
//router
app.get('/', function(req, res) {
    res.render('index');
});
// start server
var server = app.listen(8080, function () {
    console.log('Server listening at http://' + server.address().address + ':' + server.address().port);
});
