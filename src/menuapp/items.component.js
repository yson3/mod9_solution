(function () {
'use strict';

angular.module('data')
.component('items', {
	templateUrl: 'src/menuapp/templates/menu-items.template.html',
	bindings: {
		items: '<'
	}
});

})();