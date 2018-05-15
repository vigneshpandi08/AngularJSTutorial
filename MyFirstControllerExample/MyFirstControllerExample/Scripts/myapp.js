var app = angular.module('myapp', []);

app.controller('MyController', function ($scope) {
    $scope.MyValue = "Welcome";
    $scope.MyFunction = function () {
        alert("Welcome to angularJS" + $scope.MyValue);
    }
    $scope.MyFunction2 = function (val) {
        alert("Welcome to angularJS" + val);
        $scope.MyValue = val;
    }
});