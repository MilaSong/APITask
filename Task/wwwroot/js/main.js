var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $scope.rows = 5;
    $scope.columns = 5;
    $scope.tiltAngle = 30;
    $scope.modSize = 20;

    draw($scope);

    $scope.handleInput = function () {

        if (!myForm.rows.value) {
            $scope.alarm = "Invalid rows input";
        }
        else if (!myForm.columns.value) {
            $scope.alarm = "Invalid columns input";
        }
        else if (!myForm.tiltAngle.value || myForm.tiltAngle.value < 0 || myForm.tiltAngle.value > 90) {
            $scope.alarm = "Invalid tilt angle input";
        }
            else {

            $scope.alarm = "";
            $http({
                method: "POST",
                url: "api/values",
                data: {
                    Rows: $scope.rows,
                    Columns: $scope.columns
                }
            }).then(function mySuccess(response) {
                $scope.modSize = response.data;
                draw($scope);
            }, function myError(response) {
                $scope.myWelcome = response.statusText;
                });
        }
    };
});




