define([
    'angular',
    './searchResultPageController',
    '../../services/services',
    'shared/sqm/sqmDirective',
    'shared/lazyloading/lazyLoadDirective',
], function(angular, searchResultPageController, services, sqmDirective, lazyLoadDirective) {
    return angular.module('spaApp.searchResultPage', [services])
        .directive('lazyLoad', lazyLoadDirective)
        .component('spaSrpPage', {
            controller: searchResultPageController,
            controllerAs: 'vm',
            templateUrl: 'components/searchResultPage/searchResultPage.html',
            bindings: {}
        })
        .name;
});
