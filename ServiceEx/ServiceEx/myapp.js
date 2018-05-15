var app = angular.module('MyApp', []);

//app.service('MyCalService', function () {
//    this.add = function (a, b) { return parseInt(a) + parseInt(b); };
//    this.sub = function (a, b) { return a - b; };
//    this.mul = function (a, b) { return a * b; };
//    this.div = function (a, b) { return a / b; };
//});
app.factory('MyCalService', function () {
    fact = {};
    fact.add = function (a, b) { return parseInt(a) + parseInt(b); };
    fact.sub = function (a, b) { return parseInt(a) - parseInt(b); };
    fact.mul = function (a, b) { return parseInt(a) * parseInt(b); };
    fact.div = function (a, b) { return parseInt(a) / parseInt(b); };
    return fact;
});

app.controller('svcController', function ($scope, MyCalService) {
    $scope.Add = function (a, b) {
        $scope.res = MyCalService.add(a, b);
    }

    $scope.Sub = function (a, b) {
        $scope.res = MyCalService.sub(a, b);
    }

    $scope.Mul = function (a, b) {
        $scope.res = MyCalService.mul(a, b);
    }

    $scope.Div = function (a, b) {
        $scope.res = MyCalService.div(a, b);
    }
});