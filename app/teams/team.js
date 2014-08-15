(function () {
	'use strict';

	var controllerId = 'team';

	angular
		.module('app')
		.controller(controllerId, team);

	team.$inject = ['team', 'players'];

	function team (team, players) {
		var vm = this;
		
		vm.team = team;
		vm.players = players;
		
		return vm;
	}

})();