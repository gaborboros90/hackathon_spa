define([], function () {
    return function pdpService($http, baseUrl) {
        var url = baseUrl.url + '/pdp/',
            cachedPromise;

        function getPropertyDetails() {
            var clearCache = function (data) {
                cachedPromise = null;
                return data;
            };

            return cachedPromise ||
                (cachedPromise = $http.get(url + '?' + window.location.hash.split('?')[1]).then(clearCache));
        }

        return {
            getPropertyDetails: getPropertyDetails
        };
    };
});
