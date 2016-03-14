/* Sample Controller */
var movieControllers = angular.module('movieControllers', []);

movieControllers.controller('listCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            //$scope.movies = data;
            $rootScope.movies = data;
            $scope.movies = $rootScope.movies;
        });

        $scope.orderProp = 'rank';
    }]);


movieControllers.controller('galleryCtrl', ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            //$scope.movies = data;
            $rootScope.movies = data;
            $scope.movies = $rootScope.movies;
        });

        $scope.orderProp = 'rank';
    }]);

/*['$scope', '$routeParams','$rootScope',
    function($scope, $routeParams, $rootScope) {
        $scope.movies = $rootScope.movies;
    }]);*/

movieControllers.controller('detailCtrl',/*['$scope', '$http','$routeParams', '$rootScope',
    function($scope, $routeParams,$http, $rootScope) {
        $http.get('./data/imdb250.json').success(function(data) {
            $scope.rank = $routeParams.rank;
            $scope.movie = data[($scope.rank - 0) - 1];
        });

    }]);*/ ['$scope', '$routeParams','$rootScope',
    function($scope, $routeParams, $rootScope) {
        $scope.rank = $routeParams.rank;
       $scope.movie = $rootScope.movies[($scope.rank - 0) -  1];
        $scope.next= function next(rank){
            return (rank)%250 + 1;
        };

        $scope.prev = function prev(rank){
            if(rank == 1)
                return 250;
            return (rank-1)%250;
        };
    }]);
