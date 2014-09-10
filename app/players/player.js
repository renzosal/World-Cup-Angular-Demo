(function () {
	'use strict';

	var controllerId = 'player';

	angular
		.module('app')
		.controller(controllerId, player);

	player.$inject = ['player', 'clubs'];

	function player (player, clubs) {
		var vm = this;

		mergeClubInfoAndStats();
		
		vm.player = player;
		
		return vm;

		function mergeClubInfoAndStats() {

			_(player.playerSeasonStats).forEach(function (season){
				var clubInfo = _.find(clubs, {id: season.clubId});
				season.clubInfo = (typeof clubInfo !== 'undefined') ? clubInfo : null;
				return season;
			});

		}
	}

})();