define([
    'angular',
    './homePageController',
    '../../services/services',
    'shared/carousel/carouselDirective',
    'shared/sqm/sqmDirective'
], function (angular, homePageController, services, carouselDirective, sqmDirective) {
    return angular.module('spaApp.homePage', [services])
        .directive('sqmDirective', sqmDirective)
        .component('spaHomePage', {
            controller: homePageController,
            controllerAs: 'vm',
            templateUrl: 'components/homepage/homepage.html',
            bindings: {}
        })
        .name;
});
