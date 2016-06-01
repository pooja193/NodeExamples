angular.module('MyApp').controller('LoginCtrl', ['$route', '$scope', '$location', '$http', '$routeParams', function ($route, $scope, $location, $http, $routeParams) {
    'use strict';
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;

    $scope.addUser = function() {
    
      $http.post("/api/login/").then(function (response) {
          console.log('response : ' + JSON.stringify(response));
		  $scope.name = response.data[0].name;
		   $scope.address = response.data[0].address;
		    $scope.email = response.data[0].email;
			 $scope.contact = response.data[0].contact;
      });
    }
	
}]);
