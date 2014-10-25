(function () {
    'use strict';

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/start.html',
            })
            .when('/variables/:questionid', {
                templateUrl: 'views/main.html',
                controllerAs: 'vm',
                controller: 'variablesController'
            })
            .when('/ifelse/:questionid', {
                templateUrl: 'views/main.html',
                controllerAs: 'vm',
                controller: 'ifelseController'
            })
            .when('/loops/:questionid', {
                templateUrl: 'views/main.html',
                controllerAs: 'vm',
                controller: 'loopsController'
            })
            .when('/functions/:questionid', {
                templateUrl: 'views/main.html',
                controllerAs: 'vm',
                controller: 'functionsController'
            })
            .when('/proficiat', {
                templateUrl: 'views/main.html',
                controllerAs: 'vm',
                controller: 'proficiatController'
            })
			.when('/overview', {
                templateUrl: 'views/overview.html',
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    angular.module('coderDojoApp', ['ngRoute'])
        .config(config);
})();