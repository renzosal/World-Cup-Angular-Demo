(function () {
	'use strict';

	var serviceId = 'dashboardResolver';

	angular
	.module('app')
	.factory(serviceId, dashboardResolver);

	dashboardResolver.$inject = ['$q', 'datacontext'];

	function dashboardResolver($q, datacontext) {
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
					return $q.when(data);
				});

		}
	}

})();