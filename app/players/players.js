(function () {
	'use strict';

	var controllerId = 'players';

	angular
		.module('app')
		.controller(controllerId, players);

	players.$inject = ['players'];

	function players (players) {
		var vm = this;
		
		vm.players = players;
		console.log(players);
		return vm;
	}

})();