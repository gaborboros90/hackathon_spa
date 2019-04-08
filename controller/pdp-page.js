var express = require('express');
var router = express.Router();
var request = require('request');

router.use(function timeLog (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    var baseUrl = 'https://uk.hotels.com/hotel/details.json';
    var params = req.originalUrl.split('/');

    request(baseUrl + params[2], function (error, response, data) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(data));
        }
    });
});

module.exports = router;

