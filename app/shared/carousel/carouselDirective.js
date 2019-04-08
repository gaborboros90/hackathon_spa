define(['jquery', 'owl-carousel'], function ($, owlCarousel) {
    function carouselDirective($timeout) {
        function link($scope) {
            $scope.$watch('data', function (newValue) {
               if(newValue && newValue.length) {
                   $timeout(function() {
                       $('.owl-carousel').owlCarousel({
                           loop: true,
                           nav: false,
                           dots: false,
                           mouseDrag: true,
                           lazyLoad: true,
                           responsive: {
                               0: {
                                   items: 1
                               },
                               500: {
                                   items: 2
                               },
                               800: {
                                   items: 3
                               }
                           }
                       });
                   }, 0);
               }
            });
        }

        return {
            link: link,
            restrict: 'EA',
            templateUrl: './shared/carousel/carouselDirective.html',
            scope: {
                data: '=',
                details: '@'
            }
        };
    }

    return carouselDirective;
});
