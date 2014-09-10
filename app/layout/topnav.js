(function () {
	'use strict';

	var controllerId = 'topnav';

	angular
		.module('app')
		.controller(controllerId, topnav);

	topnav.$inject = ['$location'];

	function topnav ($location) {
		var vm = this;

		vm.isActive = isActive;


		function isActive(location){
			return $location.path() === location || 
			($location.path().indexOf(location) > -1 && location !== '/');
		}
	}

})();
