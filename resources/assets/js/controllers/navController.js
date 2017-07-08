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
