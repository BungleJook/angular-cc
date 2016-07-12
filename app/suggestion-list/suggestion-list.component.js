angular
    .module('suggestionList')
    .component('suggestionList', {
        templateUrl: 'suggestion-list/suggestion-list.template.html',
        controller: ['Suggestion',
            function SuggestionListController(Suggestion) {
                var self = this;

                self.suggestions = Suggestion.query();
                
                self.addSuggestion = function() {
                    // if input empty, don't submit
                    if (!self.title || self.title === "") {
                        return;
                    }
                    // push suggestions
                    self.suggestions.push({
                        title: self.title,
                        upvotes: 0,
                        date: new Date().toISOString()
                    })
                    // clear input
                    self.title = '';
                }
            }
        ]
    });