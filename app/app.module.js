angular.module('angularPip', [
    'core',
    'suggestionList',
    'suggestionDetail'])
    .config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
                .otherwise('/suggestions');
        }
    ]);