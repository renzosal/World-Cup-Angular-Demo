(function () {
	'use strict';

	var controllerId = 'players';

	angular
		.module('app')
		.controller(controllerId, players);

	players.$inject = ['topScorers', 'allPlayers'];

	function players (topScorers, allPlayers) {
		var vm = this;
		
		vm.selectedPlayer = topScorers[0];
		vm.allPlayers = allPlayers;
		vm.setSelected = setSelected;
		vm.topScorers = topScorers;

		vm.totalPlayers = allPlayers.length;
		vm.pageSize = 20;
		vm.currentPage = 1;

		return vm;


		function setSelected (id) {
			vm.selectedPlayer = _.find(topScorers, {id: id});
		}
	}

})();