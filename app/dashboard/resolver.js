(function () {
	'use strict';

	var serviceId = 'dashboardResolver';

	angular
	.module('app')
	.factory(serviceId, dashboardResolver);

	dashboardResolver.$inject = ['$q', 'datacontext', 'config'];

	function dashboardResolver($q, datacontext, config) {
		var data = {
			groups: getAllGroups,
			secondStage: getSecondStageMatches
		};

		return data;


		function getAllGroups() {
			return datacontext
				.getAllGroups()
				.then(function (data){
					return $q.when(data);
				});
		}

		function getSecondStageMatches() {
			return datacontext
				.getSecondStageMatches()
				.then(function (data){

					var bracket = {
						round16: [],
						quarters: [],
						semis: [],
						thirdPlace: [],
						final: []
					};
					_(config.secondStageMatchIds).forEach(function(round, key){
						_(round).forEach(function(matchId){
							bracket[key].push(_.where(data, {id: matchId}));
						});
					});

					return $q.when(bracket);
				});

		}
	}

})();