'use strict';

angular.module('myApp.blogPost')
    .factory('Api', [
        '$http',
        function ($http) {
            var ROOT_URL = 'http://sa/web/app_dev.php/cget';

            function getAll() {
                return $http.get(ROOT_URL);
            }

            return {
                getAll: getAll
            }
        }
    ]);