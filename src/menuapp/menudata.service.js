(function () {
'use strict';

angular.module('data')
    .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', '$q', '$timeout'];

function MenuDataService($http, $q, $timeout) {
    var service = this;
    var items = [];

    service.getAllCategories = function() {
        var deferred = $q.defer();
        $http.get("https://davids-restaurant.herokuapp.com/categories.json")
            .success(function(data) {
                console.log(data);
                service.items = data;

                // Wait 2 seconds before returning
                $timeout(function () {
                    deferred.resolve(data);
                }, 800);
            });
    
        return deferred.promise;
    };

    service.getItemsForCategory = function(categoryShortName) {
        var deferred = $q.defer();
        $http.get("https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName)
            .success(function(data) {
                console.log(data);
                service.items = data;

                // Wait 2 seconds before returning
                $timeout(function () {
                    deferred.resolve(data);
                }, 800);
            });
    
        return deferred.promise;
    }
}

})();
