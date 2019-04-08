define(['jquery'], function ($) {
    function sqmDirective($timeout) {
        function link($scope) {

        }

        function sqmController($scope, $location, lookupService) {
            var vm = this;

            vm.search = search;
            vm.suggestions = [];
            vm.selectedDestination = '';

            $scope.$watch('vm.data.dates', function (newValue) {
                if (newValue) {
                    if ((/\//).test(vm.data.dates.checkout.iso) && (/\//).test(vm.data.dates.checkin.iso)) {

                        vm.data.dates.checkout.iso = vm.data.dates.checkout.iso.split('/');
                        vm.data.dates.checkin.iso = vm.data.dates.checkin.iso.split('/');

                        vm.data.dates.checkout.iso.move(0, 1);
                        vm.data.dates.checkin.iso.move(0, 1);
                    }


                    vm.data.dates.checkout.iso = new Date(vm.data.dates.checkout.iso);
                    vm.data.dates.checkin.iso = new Date(vm.data.dates.checkin.iso);

                    var timeDiff = Math.abs(vm.data.dates.checkout.iso.getTime() - vm.data.dates.checkin.iso.getTime());

                    vm.data.dates.numnights = Math.ceil(timeDiff / (1000 * 3600 * 24));
                }
            }, true);

            $scope.$watch('vm.selectedDestination', function(newValue, oldValue){
                if (newValue === oldValue) {return;}
                if(newValue.length >= 3 ){
                    lookupService.getSuggestions(newValue)
                        .then(function(result){
                            vm.suggestions = mapSuggestions(result.data.suggestions[0].entities);
                        })
                        .catch(function(error) {
                            console.log('Error: ' + error);
                        });
                }
            });

            function mapSuggestions(suggestions) {
                return suggestions.map(function(suggestion) {
                    return {
                        destinationId: suggestion.destinationId,
                        caption: suggestion.caption,
                        name: suggestion.name
                    };
                });
            }

            function findDestinationId(destinationName) {
                return vm.suggestions.filter(function(suggestion) {
                    return suggestion.name === destinationName;
                });
            }

            function search() {
                $location.path('/srp/')
                    .search(
                        {
                            'destination-id': findDestinationId(vm.selectedDestination)[0].destinationId,
                            'q-check-in': formatDate(vm.data.dates.checkin.iso),
                            'q-check-out': formatDate(vm.data.dates.checkout.iso)
                        }
                    );
            }

            function formatDate(date) {
                var d = new Date(date),
                    month = '' + (d.getMonth() + 1),
                    day = '' + d.getDate(),
                    year = d.getFullYear();

                if (month.length < 2) {
                    month = '0' + month;
                }
                if (day.length < 2) {
                    day = '0' + day;
                }

                return [year, month, day].join('-');
            }

            Array.prototype.move = function (old_index, new_index) {
                if (new_index >= this.length) {
                    var k = new_index - this.length;
                    while ((k--) + 1) {
                        this.push(undefined);
                    }
                }
                this.splice(new_index, 0, this.splice(old_index, 1)[0]);
                return this; // for testing purposes
            };
        }

        return {
            link: link,
            restrict: 'EA',
            controllerAs: 'vm',
            controller: sqmController,
            bindToController: true,
            templateUrl: './shared/sqm/sqmDirective.html',
            scope: {
                data: '='
            }
        };
    }

    return sqmDirective;
});
