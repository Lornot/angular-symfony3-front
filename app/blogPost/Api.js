'use strict';

angular.module('myApp.blogPost')
    .factory('Api', [
        '$http',
        function ($http) {
            var ROOT_URL = 'http://sa/web/app_dev.php/cget';

            function getAll() {
                return $http.get('http://sa/web/app_dev.php/cget');
            }
            
            function post(blogPost) {
                return $http.post('http://sa/web/app_dev.php/post', blogPost)
            }

            return {
                getAll: getAll,
                post:   post
            }
        }
    ]);