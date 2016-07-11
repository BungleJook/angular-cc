angular
    .module('suggestionList')
    .component('suggestionList', {
        templateUrl: 'suggestion-list/suggestion-list.template.html',
        controller: ['Suggestion',
            function SuggestionListController(Suggestion) {
                var self = this;

                self.suggestions = Suggestion.query();
            }
        ]
    });