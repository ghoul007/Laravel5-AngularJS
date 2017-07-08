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

myApp.controller('globalController', ['$scope','$location', function($scope, $location) {
    $scope.global = {};
    $scope.global.navUrl = 'templates/partials/nav.html';
}]);

myApp.controller('navController', ['$scope', '$location', 'userModel', function ($scope, $location, userModel) {
    angular.extend($scope, {
        user: userModel.getUserObject(),
        navUrl: [{
            link: 'Home',
            url: '/dashboard'

        }, {
            link: 'Page1',
            url: '/page/view'
        }
        ]
    });


    /*Methods*/
    angular.extend($scope, {
        doLogout: function () {
            userModel.doUserLogout();
            $location.path('/');
        },
        checkActiveLink: function (routeLink) {
            if ($location.path() == routeLink) {
                return 'make-active';
            }
        }
    });
}]);

myApp.controller('pageController', ['$scope', function($scope) {
    $scope.test ='page1';
}]);

//# sourceMappingURL=controllers.js.map
