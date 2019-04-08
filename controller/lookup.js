var express = require('express');
var router = express.Router();
var request = require('request');

router.use(function timeLog (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    var baseUrl = 'https://lookup.hotels.com/1/suggest/v1.3/json?locale=en_GB&boostConfig=config-boost-10&excludeLpa=false&query=';
    var query = req.query;

    request(baseUrl + query.query, function (error, response, data) {
        if (!error && response.statusCode == 200) {
            res.send(data);
        }
    });
});

module.exports = router;
