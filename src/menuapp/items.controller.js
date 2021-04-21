(function () {
'use strict'

angular.module('data')
	.controller('MenuItemsController', MenuItemsController)

MenuItemsController.$inject = ['MenuDataService', 'items']
function MenuItemsController (MenuDataService, items) {
	var categoryMenuItems = this;
	categoryMenuItems.items = items.menu_items;
}

})()