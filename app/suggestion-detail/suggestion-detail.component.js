angular
    .module('suggestionDetail')
    .component('suggestionDetail', {
        templateUrl: 'suggestion-detail/suggestion-detail.template.html',
        controller: ['Suggestion', '$routeParams', 
            function SuggestionDetailController(Suggestion, $routeParams) {
                var self = this;

                Suggestion.query().$promise.then(function(data) {
                    self.suggestion = data[$routeParams.id];

                    self.commentsCount = self.suggestion.comments.length;
                });

                self.addComment = function() {
                    if (!self.content || self.content === "") {
                        return;
                    }
                    self.suggestion.comments.push({
                        content: self.content,
                        upvotes: 0,
                        date: new Date().toISOString()
                    })
                    self.content = "";
                }
            }
        ]
    });