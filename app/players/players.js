(function () {
	'use strict';

	var controllerId = 'players';

	angular
		.module('app')
		.controller(controllerId, players);

	players.$inject = ['topScorers'];

	function players (topScorers) {
		var vm = this;
		
		vm.selectedPlayer = topScorers[0];
		vm.setSelected = setSelected;
		vm.topScorers = topScorers;
		return vm;


		function setSelected (id) {
			vm.selectedPlayer = _.find(topScorers, {id: id});
		}
	}

})();