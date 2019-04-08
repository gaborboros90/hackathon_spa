var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var homePage = require('./controller/home-page');
var srpPage = require('./controller/srp-page');
var pdpPage = require('./controller/pdp-page');
var lookup = require('./controller/lookup');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/app'));
app.use(cors());

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use('/homepage', homePage);
app.use('/srp', srpPage);
app.use('/pdp', pdpPage);
app.use('/lookup', lookup);

app.use(function(req, res) {
    res.send('404: Page not Found', 404);
});

app.use(function(req, res) {
    res.send('500: Internal Server Error', 500);
});

app.listen(port);

console.log('Web server has been started on port ' + port);
