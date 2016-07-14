angular.module('suggestionDetail', ['ngRoute', 'core.suggestion'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/suggestion/:id', {
                    template: '<suggestion-detail></suggestion-detail>'
                });
        }
    ]);