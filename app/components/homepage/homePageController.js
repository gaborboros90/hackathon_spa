define([], function () {
    return function homePageController(hpService) {
        var vm = this;
        vm.model = {};
        vm.teaserData = [];

        loadHomePageContent();

        function loadHomePageContent() {
            hpService.getHomePageContent()
                .then(function (result) {
                    vm.model = result.data.data;
                    parseTeaserData();
                })
                .catch(function (error) {
                    console.log('Error: ' + error);
                });
        }

        function parseTeaserData() {
            var result = [];
            for(var i = 0; i < 20; i++) {
                var d = vm.model.body.dynamic.data['teaser' + i];
                if(d) {result.push(d);}
            }
            vm.teaserData = result;
        }
    };
});
