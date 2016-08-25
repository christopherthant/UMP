//
//  angular bootup and routing table
//


console.log("UMP Bootstrap");

(function () {

    var app = angular.module('UMP', ['ngRoute', 'ui.bootstrap', 'ngSanitize', 'blockUI']);

    app.config(['$controllerProvider', '$provide', function ($controllerProvider, $provide) {
        app.register =
          {
              controller: $controllerProvider.register,
              service: $provide.service
          };
    }]);

})();

console.log("UMP Bootstrap FINISHED 2");




