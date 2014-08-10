(function () {
	'use strict';

	var serviceId = 'playersResolver';

	angular
		.module('app')
		.factory(serviceId, playersResolver);

		playersResolver.$inject = ['$q', 'datacontext'];

		function playersResolver($q, datacontext) {
			

			var data = {
				player: getPlayerById,
				clubs: getAllClubs
			};

			return data;

			function getAllClubs() {

				return datacontext
					.getAllClubs()
					.then(function (data) {
						return $q.when(data);
					});
			}

			function getPlayerById(playerId) {

				return datacontext
					.getPlayerById(playerId)
					.then(function (data) {
						return $q.when(data);
					});
			}

		}

})();