'use strict';

angular.module('myApp.blogPost')
    .factory('Api', [
        '$http',
        function ($http) {
            var ROOT_URL = 'http://sa/web/app_dev.php/';

            function get(id) {
                console.log(ROOT_URL+'get/'+id);
                return $http.get(ROOT_URL+'get/'+id)
            }

            function getAll() {
                return $http.get('http://sa/web/app_dev.php/cget');
            }
            
            function post(blogPost) {
                return $http.post('http://sa/web/app_dev.php/post', blogPost)
            }

            function put(id, data) {
                return $http.put(ROOT_URL+'put/'+id, data)
            }

            return {
                get:    get,
                getAll: getAll,
                post:   post,
                put:    put
            }
        }
    ]);