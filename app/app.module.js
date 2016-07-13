angular.module('angularPip', [
    'core',
    'suggestionList'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .otherwise('/suggestions');
        }
    ]);