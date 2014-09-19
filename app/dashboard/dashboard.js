(function() {
	'use strict';

	var controllerId = 'dashboard';

	angular
		.module('app')
		.controller(controllerId, dashboard);

	dashboard.$inject = ['matches','groups', 'secondStage', 'test'];

	function dashboard(matches, groups, secondStage, test){

		console.log(test);
		var vm = this;
		var groupKeys = [];
		_.each(groups,function(val,key){groupKeys.push(key)});
		vm.groups = groups;
		vm.groupKeys = groupKeys;

		vm.secondStage = secondStage;
		vm.matchesByDate = matches;
		vm.matchesCount = matches.length;
		vm.title = 'Dashboard';
		vm.carouselInterval = 5000000;

		return vm;
	}
})();