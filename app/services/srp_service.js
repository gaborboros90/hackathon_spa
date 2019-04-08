define([], function() {
    return function srpService($http, baseUrl) {
        var url = baseUrl.url + '/srp/',
            cachedPromise;

        function getSearchResults(query) {
            var clearCache = function(data) {
                    cachedPromise = null;
                    return data;
                },
                config = {params: query};

            return cachedPromise ||
                (cachedPromise = $http.get(url, config).then(clearCache));
        }

        return {
            getSearchResults: getSearchResults
        };
    };
});
