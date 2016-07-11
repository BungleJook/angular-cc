angular.
    module('postList').
    component('postList', {
        templateUrl: 'post-list/post-list.template.html',
        controller: ['Post',
            function PostListController(Post) {
                var self = this;

                self.posts = Post.query();
            }
        ]
    });