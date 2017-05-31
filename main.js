angular.module('myApp', [])
    .controller('myController', ['$scope', 'filterFilter', function ($scope, filterFilter) {
        $scope.movies = [
            {movie: 'La La Land', genre: 'Musical', year: 2016},
            {movie: 'Moonlight', genre: 'Drama', year: 2016},
            {movie: 'Spotlight', genre: 'Drama', year: 2015},
            {movie: 'Birdman', genre: 'Drama', year: 2014},
            {movie: 'Silence of the lambs', genre: 'Horror', year: 1991},
            {movie: 'Chicago', genre: 'Musical', year: 2002},
            {movie: 'The Hangover', genre: 'Comedy', year: 2010}
        ];
        $scope.filteredMovies = $scope.movie;
        $scope.reverse = true;
        $scope.column = 'movie';
        $scope.setSort = function (column) {
            $scope.column = column;
            $scope.reverse = !$scope.reverse;
        };
        $scope.filterString = "";
        $scope.setFilter = function (value) {
            $scope.filteredMovies =
                filterFilter($scope.movies, $scope.filterString);
        };
    }]);