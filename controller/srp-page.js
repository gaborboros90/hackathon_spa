var express = require('express');
var router = express.Router();
var request = require('request');

router.use(function timeLog (req, res, next) {
    next();
});

router.get('/', function (req, res) {
    var baseUrl = 'http://uk.hotels.com/search/listings.json';
    var params = req.originalUrl.split('/');

    request(baseUrl + params[2], function (error, response, data) {
        if (!error && response.statusCode == 200) {
            var responseString = data
                .replace('dio.pages.sha.searchResultsCallback(','')
                .slice(0, -2);

            res.send(data);
        }
    });
});

module.exports = router;
