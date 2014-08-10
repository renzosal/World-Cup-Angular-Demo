(function () {
	'use strict';

	var controllerId = 'match';

	angular
		.module('app')
		.controller(controllerId, match);

	match.$inject = ['match'];

	function match (match) {
		var vm = this;

		vm.match = match;
		
		return vm;

	}

})();