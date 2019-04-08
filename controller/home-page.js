var express = require('express');
var router = express.Router();
var request = require('request');

router.use(function timeLog (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    request('http://uk.hotels.com/?dio.view=model', function (error, response, data) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(data));
        }
    });
});

module.exports = router;
