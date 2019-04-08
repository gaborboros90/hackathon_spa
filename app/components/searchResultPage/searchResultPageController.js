define(['_'], function (_) {
   return function searchResultPageController(srpService, $location, $scope) {
       var vm = this;
       vm.model = {};

       var urlParams = $location.search();
       vm.pn = 1;
       vm.loading = true;
       vm.sqmVisibility = false;

       vm.searchQuery = {
           destinationName: urlParams['q-destination-name'],
           destinationId: urlParams['destination-id'],
           qCheckOut: urlParams['q-check-out'],
           qRoom0Adults: '2',
           pg: '1',
           qCheckIn: urlParams['q-check-in'],
           qRoom0Children: '0',
           startIndex: '13',
           pn: vm.pn
       };
       vm.searchResult = {};

       srpService.getSearchResults(vm.searchQuery)
           .then(function(result) {
               vm.loading = false;
               vm.model = result.data.data;
           })
           .catch(function(error) {
               console.log('Error: ' + error);
           });

       vm.getNumber = function(num) {
           return new Array(Math.floor(num));
       };

       vm.goToPdp = function(url) {
           var parseUrl = url.replace('hotel/details.html','pdp');
           $location.url(parseUrl);
       };

       $scope.$watch('vm.pn', function(newValue) {
            if(newValue && newValue > 1) {
                vm.searchQuery.pn = newValue;

                vm.loading = true;

                srpService.getSearchResults(vm.searchQuery)
                    .then(function(result) {
                        vm.loading = false;
                        vm.model.body.searchResults.results = vm.model.body.searchResults.results.concat(result.data.data.body.searchResults.results);
                    })
                    .catch(function(error) {
                        console.log('Error: ' + error);
                    });
            }
       });
   };
});
