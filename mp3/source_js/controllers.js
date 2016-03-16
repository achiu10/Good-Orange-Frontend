/* Sample Controller */
var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('homeCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            //$scope.movies = data;
            $scope.restaurants = data;
        });

        $scope.orderProp = 'name';
    }]);


movieControllers.controller('searchCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.restaurants = data;
        });

        $scope.orderProp = 'name';
    }]);

/*['$scope', '$routeParams','$rootScope',
    function($scope, $routeParams, $rootScope) {
        $scope.movies = $rootScope.movies;
    }]);*/

movieControllers.controller('reviewsCtrl',/*['$scope', '$http','$routeParams', '$rootScope',
    function($scope, $routeParams,$http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.rank = $routeParams.rank;
            $scope.movie = data[($scope.rank - 0) - 1];
        });

    }]);*/ ['$scope', '$routeParams','$rootScope',
    function($scope, $routeParams, $rootScope) {
        $scope.rank = $routeParams.rank;
       $scope.movie = $rootScope.movies[($scope.rank - 0) -  1];
        $scope.arr = [];
        $scope.arr.length = count;
        $scope.next= function next(rank){
            return (rank)%250 + 1;
        };

        $scope.prev = function prev(rank){
            if(rank == 1)
                return 250;
            return (rank-1)%250;
        };
    }]);

movieControllers.controller('loginCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.restaurants = data;
        });

        $scope.orderProp = 'name';
    }]);
movieControllers.controller('newuserCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.restaurants = data;
        });

        $scope.orderProp = 'name';
    }]);
movieControllers.controller('addRestaurantCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.restaurants = data;
        });

        $scope.orderProp = 'name';
    }]);
movieControllers.controller('viewRestaurantsCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.restaurants = data;
        });

        $scope.orderProp = 'name';
    }]);
