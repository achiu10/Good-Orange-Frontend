var app=angular.module("mp3",["ngRoute", 'movieControllers']);
app.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'partials/home.html',
        compile: function() {
  $(document).foundation();
},
        controller: 'homeCtrl'
    }).
    when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'searchCtrl'
    }).
    when('/reviews', {
        templateUrl: 'partials/reviews.html',
        controller: 'reviewsCtrl'
    }).
    when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginCtrl'
    }).
    when('/newuser', {
        templateUrl: 'partials/newuser.html',
        controller: 'newuserCtrl'
    }).
    when('/addRestaurant', {
        templateUrl: 'partials/addRestaurant.html',
        controller: 'addRestaurantCtrl'
    }).
    when('/viewRestaurants', {
        templateUrl: 'partials/viewRestaurants.html',
        controller: 'viewRestaurantsCtrl'
    }).
    otherwise({
        redirectTo: '/home'
    });
}]);