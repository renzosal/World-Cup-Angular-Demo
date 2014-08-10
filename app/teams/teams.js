(function () {
	'use strict';

	var controllerId = 'teams';

	angular
		.module('app')
		.controller(controllerId, teams);

	teams.$inject = ['teams'];

	function teams (teams) {
		var vm = this;

		vm.teams = teams;
		vm.topScoringTeam = getTopScoringTeam();
		
		return vm;

		function getTopScoringTeam(){
			return _.max(teams,'goalsFor');
		}
	}

})();