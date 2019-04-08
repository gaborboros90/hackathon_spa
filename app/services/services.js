define([
    'angular',
    './hp_service',
    './srp_service',
    './pdp_service',
    './lookup_service'
], function(angular, HomePageService, SearchResultPageService, PropertyDetailsPageService, LookupService){
    return angular.module('spaApp.services', [])
        .constant('baseUrl', {
            'url': 'http://hcomhackathon2017-spa-diosdavid.boxfuse.io'
        })
        .factory('hpService', HomePageService)
        .factory('srpService', SearchResultPageService)
        .factory('pdpService', PropertyDetailsPageService)
        .factory('lookupService', LookupService)
        .name;
});
