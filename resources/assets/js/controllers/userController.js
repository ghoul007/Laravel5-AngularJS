myApp.controller('userController', ['$scope', '$location', 'userModel', function($scope, $location, userModel) {

    $scope.login= {
            username: 'ghoul.ahmed5@gmail.com',
            password: 'ghoul'
        }
    angular.extend($scope, {
        doLogin: function(loginForm) {
            var data = {
                email: $scope.login.username,
                password: $scope.login.password
            };

            userModel.doLogin(data).then(function() {
                $location.path('/dashboard');
            });
        }
    });
}]);
