(function () {
	'use strict';

	var controllerId = 'players';

	angular
		.module('app')
		.controller(controllerId, players);

	players.$inject = ['$scope', 'filterFilter','topScorers', 'allPlayers'];

	function players ($scope, filter, topScorers, allPlayers) {
		var vm = this;
		
		//Top Scorers Section
		vm.topScorers = topScorers;
		vm.setSelected = setSelected;
		vm.selectedPlayer = topScorers[0];
		
		//Players Table
		vm.playerSearch = '';
		vm.filteredPlayers = allPlayers;
		vm.pageSize = 20;
		vm.currentPage = 1;

		watchers();

		return vm;


		function setSelected (id) {
			vm.selectedPlayer = _.find(topScorers, {id: id});
		}

		function watchers() {
			$scope.$watch('vm.playerSearch', function(newVal) {
				vm.filteredPlayers = filter(allPlayers, newVal);
			});
		}
	}

})();