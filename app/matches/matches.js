(function () {
	'use strict';

	var controllerId = 'matches';

	angular
		.module('app')
		.controller(controllerId, matches);

	matches.$inject = ['matches'];

	function matches (matches) {
		var vm = this;
		
		vm.matches = matches;
		
		return vm;
	}

})();