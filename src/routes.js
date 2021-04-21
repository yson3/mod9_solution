// Retrieved from Lecture 37 examples
(function() {
'use strict';

angular.module('MenuApp')
    .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home view
    .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // Categories view
    .state('categoryList', {
        url: '/categories',
        templateUrl: 'src/menuapp/templates/home-categories.template.html',
        controller: 'CategoriesController as categoryList',
        resolve: {
            items: ['MenuDataService', function(MenuDataService) {
                return MenuDataService.getAllCategories();
            }]
        }
    })

    // Categories menu items view
    .state('categoryMenuItems', {
        url: '/category/{categoryShortName}/items',
        templateUrl: 'src/menuapp/templates/home-menu-items.template.html',
        controller: 'MenuItemsController as categoryMenuItems',
        resolve: {
            items: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
                return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
            }]
        }
    })
}

})();