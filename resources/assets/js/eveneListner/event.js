myApp.run(["$rootScope", "$location", 'userModel',
    function($rootScope, $location, userModel) {
        $rootScope.$on("$routeChangeStart",
            function(event, next, current) {
                if (next.$$route.authenticated) {
                    if (!userModel.getAuthStatus()) {
                        $location.path('/');
                    }
                }

                if (next.$$route.originalPath == '/') {
                    if (userModel.getAuthStatus()) {
                        $location.path(current.$$route.originalPath);
                    }
                }
            });
    }
]);