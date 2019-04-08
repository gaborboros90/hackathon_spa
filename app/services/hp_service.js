define([], function() {
   return function hpService($http, baseUrl) {
       var url = baseUrl.url + '/homepage',
           cachedPromise;

       function getHomePageContent() {
           var clearCache = function(data) {
               cachedPromise = null;
               return data;
           };

           return cachedPromise ||
               (cachedPromise = $http.get(url).then(clearCache));
       }

       return {
           getHomePageContent: getHomePageContent
       };
   };
});
