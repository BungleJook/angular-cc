angular.module('suggestionList', ['ngRoute', 'core.suggestion'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/suggestions', {
                    template: "<suggestion-list></suggestion-list>"
                });
        }
    ]);