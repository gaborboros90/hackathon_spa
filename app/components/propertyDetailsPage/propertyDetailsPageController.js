define([], function () {
   return function propertyDetailsPageController(pdpService) {
       var vm = this;

       vm.model = {};

       function loadPageContent() {
           pdpService.getPropertyDetails()
               .then(function (result) {
                   vm.model = result.data.data;

                   parseImages();
               })
               .catch(function (error) {
                   console.log('Error: ' + error);
               });
       }

       function parseImages () {
           vm.model.body.propertyDescription.hotelImageContent.hotelImages.forEach(function(image) {
               image.imageUrl = image.imageUrl.replace('{size}','z');
           });
       }

       loadPageContent();
   };
});
