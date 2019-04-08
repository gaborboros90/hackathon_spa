define([
    'angular',
    'ngRoute',
    'ngAnimate',
    'components/homepage/homePage',
    'components/propertyDetailsPage/propertyDetailsPage',
    'components/searchResultPage/searchResultPage',
    'shared/carousel/carouselDirective',
], function (angular, ngRoute, ngAnimate, homePage, propertyDetailsPage, searchResultPage,carouselDirective) {
    'use strict';

    return angular.module('spaApp', [homePage, propertyDetailsPage, searchResultPage, 'ngRoute','ngAnimate'])
        .config(['$compileProvider', '$routeProvider', function ($compileProvider, $routeProvider) {
            $compileProvider.debugInfoEnabled(false);

            $routeProvider
                .when('/', {
                    template: '<spa-home-page></spa-home-page>'
                })
                .when('/srp', {
                    template: '<spa-srp-page></spa-srp-page>'
                })
                .when('/pdp', {
                    template: '<spa-pdp-page></spa-pdp-page>'
                })
                .otherwise({
                    template: '<spa-home-page></spa-home-page>'
                });
        }])
        .directive('carouselDirective', carouselDirective)
        .name;
});
