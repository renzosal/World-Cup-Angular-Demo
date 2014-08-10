(function () {
	'use strict';

	var serviceId = 'teamsResolver';

	angular
		.module('app')
		.factory(serviceId, teamsResolver);

		teamsResolver.$inject = ['$q', 'datacontext'];

		function teamsResolver($q, datacontext) {
			var data = {
				teams: getAllTeams,
				team: getTeamByName,
				players: getPlayersByCountry
			};

			return data;

			function getAllTeams() {
				return datacontext
					.getAllTeams()
					.then(function (data) {
						return $q.when(data);
					});
			}

			function getTeamByName(name) {
				return datacontext
					.getTeamByName(name)
					.then(function (data) {
						return $q.when(data);
					});
			}

			function getPlayersByCountry(country){
				return datacontext
					.getPlayersByCountry(country)
					.then(function(data){
						return $q.when(data);
					});
			}
		}

})();