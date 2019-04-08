define([], function() {
    return function lookupService($http, baseUrl) {
        var url = baseUrl.url + '/lookup',
            cachedPromise;

        function getSuggestions(query) {
            var clearCache = function(data) {
                    cachedPromise = null;
                    return data;
                };

            return cachedPromise ||
                (cachedPromise = $http.get(url + '?query=' + query).then(clearCache));
        }

        return {
            getSuggestions: getSuggestions
        };
    };
});
