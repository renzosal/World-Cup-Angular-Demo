(function () {
	'use strict';

	var serviceId = 'matchesResolver';

	angular
	.module('app')
	.factory(serviceId, matchesResolver);

	matchesResolver.$inject = ['$q', 'datacontext'];

	function matchesResolver($q, datacontext) {
		var data = {
			matches: matchesByDate,
			matchById: getMatchById
		};

		return data;

		function matchesByDate() {
			return datacontext
				.getAllMatches()
				.then(function (data) {
					var groupedMatches = _.groupBy(data, function(match){
						return moment(match.startTime).format('MM/DD/YYYY');

					});

					return $q.when(groupedMatches);
				});
		}

		function getMatchById(matchId){
			return datacontext
				.getMatchById(matchId)
				.then(function(data){
					return $q.when(data);
				});
		}
	}

})();