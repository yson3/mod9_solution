(function () {
'use strict'

angular.module('data')
	.controller('CategoriesController', CategoriesController)

CategoriesController.$inject = ['MenuDataService', 'items']
function CategoriesController (MenuDataService, items) {
	var categoryList = this;
	categoryList.items = items;
}

})()