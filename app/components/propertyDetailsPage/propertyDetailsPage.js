define([
    'angular',
    './propertyDetailsPageController',
    '../../services/services'
], function(angular, propertyDetailsPageController, services) {
    return angular.module('spaApp.propertyDetailsPage', [services])
    .component('spaPdpPage', {
        controller: propertyDetailsPageController,
        controllerAs: 'vm',
        templateUrl: 'components/propertyDetailsPage/propertyDetailsPage.html',
            bindings: {
            }
        })
        .name;
});
