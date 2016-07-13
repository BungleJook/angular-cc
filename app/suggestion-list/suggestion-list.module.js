angular.module('suggestionList', ['core.suggestion', 'ngRoute'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .when('/suggestions', {
                    template: "<suggestion-list></suggestion-list>"
                });
        }
    ]);