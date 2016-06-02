angular.module('MyApp').controller('AddUserCtrl', ['$route', '$scope', '$location', '$http', '$routeParams', function ($route, $scope, $location, $http, $routeParams) {
    'use strict';
    this.$route = $route;
    this.$location = $location;
    this.$routeParams = $routeParams;
	$scope.user = {
		name : '',
		address : '',
		city : '',
		email : '',
		contact : ''
		}
		
		
	
 $scope.addUser = function(user) {
      var userdata = $scope.user;
      console.log("user data : " + JSON.stringify(userdata));
      $http.post("/api/add/" + JSON.stringify(userdata)).then(function (response) {
       
		
	    });
	  $scope.displayData();
	  $scope.user.name ='';
	  $scope.user.address ='';
	  $scope.user.city ='';
	  $scope.user.email ='';
	  $scope.user.contact ='';
	   //$scope.frm_user.txt_name.$dirty=false;
    }
	
	
$scope.displayUser = function(x) {
	
      var userdata = x;
      console.log("user data : " + JSON.stringify(userdata));
	  console.log(x.name);
	  console.log('s name' + $scope.user.name);
	 $scope.user.name=x.name;
	 $scope.user.address=x.address;
	 $scope.user.city=x.city;
	 $scope.user.email=x.email;
	 $scope.user.contact=x.contact;
	 $scope.btn_save_ishide=true;
	 $scope.btn_update_ishide=false;
	 $scope.user.name.disable=true;
    }	
	
	$scope.displayData = function() {
		 $scope.btn_update_ishide=true;
		 $scope.btn_save_ishide=false;
         $http.post("/api/display/").then(function (response) {
  		 console.log(response.data);
	     $scope.data = response.data;
		 
	    });
    }
	
	
		
 $scope.updateUser = function(user) {
      var userdata = $scope.user;
      console.log("user data : " + JSON.stringify(userdata));
      $http.post("/api/update/" + JSON.stringify(userdata)).then(function (response) {

	    });
	  $scope.displayData();
	  $scope.user.name ='';
	  $scope.user.address ='';
	  $scope.user.city ='';
	  $scope.user.email ='';
	  $scope.user.contact ='';
	  
    }
	
}]);
