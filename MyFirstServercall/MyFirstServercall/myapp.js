var app = angular.module('myApp', []);
app.controller('cityController', function ($scope, $http) {
    debugger;
    $scope.GetCityLists = function () {
        alert('Hi');
        $http.get('/City/Index').then(function (response)
        {
            $scope.CityLists = response.data;
        });
    };
});


app.controller('studentController', function ($scope, $http) {
    debugger;
    $scope.GetStudent = function () {
        alert('Welcome');
        $http.get('/Student/Index').then(function (response) {
            $scope.Students = response.data;
        });
    };
});