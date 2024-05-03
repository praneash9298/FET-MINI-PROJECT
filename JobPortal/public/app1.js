var app = angular.module('myApp', []);
app.controller('FormController', ['$scope', '$window', function($scope, $window) {
    $scope.formData = {};
    $scope.errors = {};

    $scope.submitForm = function() {
        $scope.errors = {};

        if (!/^[a-zA-Z\s]+$/.test($scope.formData.name)) {
            $scope.errors.name = 'Name should contain only alphabets.';
        }

        if ($scope.formData.age < 20 || $scope.formData.age > 40) {
            $scope.errors.age = 'Age should be between 20 and 40.';
        }

        var currentDate = new Date();
        var selectedDate = new Date($scope.formData.date);

        if (selectedDate > currentDate) {
            $scope.errors.date = 'Date of application should be before the current date.';
        }

        if (Object.keys($scope.errors).length === 0) {
            $window.location.href = 'success.html';
        }
    };
}]);
