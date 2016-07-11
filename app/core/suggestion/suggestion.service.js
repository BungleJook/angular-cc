angular
    .module('core.suggestion')
    .factory('Suggestion', ['$resource', 
        function($resource) {
            return $resource('suggestions/suggestions.json', {}, {});
        }
    ]);