var app=angular.module("mp3",["ngRoute", 'movieControllers']);
app.config(['$routeProvider',
    function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller: 'listCtrl'
    }).
    when('/gallery', {
        templateUrl: 'partials/gallery.html',
        controller: 'galleryCtrl'
    }).
    when('/list/:rank', {
        templateUrl: 'partials/details.html',
        controller: 'detailCtrl'
    }).
    otherwise({
        redirectTo: '/list'
    });
}]);