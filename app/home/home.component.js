angular
    .module('home')
    .component('home', {
        templateUrl: 'home/home.template.html',
        controller: [ 
            function HomeController() {
                var self = this;

                self.hello = "Hello World!";
            }
        ]
    })