
console.log("master controller");

angular.module('UMP').controller('masterController',
    ['$routeParams', '$location', 'ajaxService', 'applicationConfiguration',
        function ($routeParams, $location, ajaxService, applicationConfiguration) {

            var vm = this;

            this.initializeController = function () {
                vm.applicationVersion = applicationConfiguration.version;
            }

        }]);