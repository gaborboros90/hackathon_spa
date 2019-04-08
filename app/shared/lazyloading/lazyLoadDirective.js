define(['jquery', '_'], function ($, _) {
    function lazyloadDirective() {
        function link($scope, $element) {
            function isOnViewPort($element) {
                if ($(window).scrollTop() >= $(document).height() - $(this).height() - 250) {
                    $scope.$apply(function () {
                        $scope.pn++;					
                    });
                }
            }

            $(window).on('scroll', _.debounce(isOnViewPort, 50));
        }

        return {
            link: link,
            restrict: 'EA',
            scope: {
                pn: '='
            }
        };
    }

    return lazyloadDirective;
});
