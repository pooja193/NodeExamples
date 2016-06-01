angular.module('MyApp', ['ngRoute', 'ngAnimate'])
    .config(['$routeProvider', '$locationProvider',
        function ($routeProvider, $locationProvider) {
			

            'use strict';
            console.log("in main app");
            $routeProvider.when('/', {
                    templateUrl: 'partials/AddUser.html',
                    controller: 'AddUserCtrl'
                })
			
                $routeProvider.otherwise({
                redirectTo: '/'
            });

        }]);
