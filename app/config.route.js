(function () {
	'use strict';

	angular
		.module('app')
		.constant('routes', getRoutes())
		.config(routeConfigurator);

	routeConfigurator.$inject = ['$routeProvider', 'routes'];

	//Configure the routes
	function routeConfigurator($routeProvider, routes) {
		_.each(routes, function(route) {
			$routeProvider.when(route.url, route.config);
		});

		$routeProvider.otherwise({redirectTo: '/'});
	}

	//Define the routes
	function getRoutes() {
		return [
			{
				url: '/',
				config: {
					templateUrl: 'app/dashboard/dashboard.html',
					title: 'Dashboard',
					controller: 'dashboard',
					controllerAs: 'vm',
					resolve: {
						matches: function(matchesResolver){
							return matchesResolver.matches();
						},
						groups: function (dashboardResolver){
							return dashboardResolver.groups();
						},
						secondStage: function (dashboardResolver){
							return dashboardResolver.secondStage();
						}
					}
				}
			},
			{
				url: '/matches',
				config: {
					templateUrl: 'app/matches/matches.html',
					title: 'Matches',
					controller: 'matches',
					controllerAs: 'vm',
					resolve: {
						matches: function(matchesResolver){
							return matchesResolver.matches();
						}
					}
				}
			},
			{
				url: '/matches/:matchId',
				config: {
					templateUrl: 'app/matches/match.html',
					title: 'Match',
					controller: 'match',
					controllerAs: 'vm',
					resolve: {
						match: function ($route, matchesResolver){
							return matchesResolver.matchById($route.current.params.matchId);
						}
					}
				}
			},
			{
				url: '/teams',
				config: {
					templateUrl: 'app/teams/teams.html',
					title: 'Teams',
					controller: 'teams',
					controllerAs: 'vm',
					resolve: {
						teams: function (teamsResolver){
							return teamsResolver.teams();
						}
					}
				}
			},
			{
				url: '/teams/:name',
				config: {
					templateUrl: 'app/teams/team.html',
					title: 'Teams',
					controller: 'team',
					controllerAs: 'vm',
					resolve: {
						team: function ($route,teamsResolver){
							return teamsResolver.team($route.current.params.name);
						},
						players: function ($route, teamsResolver){
							return teamsResolver.players($route.current.params.name);
						}
					}
				}
			},
			{
				url: '/players',
				config: {
					templateUrl: 'app/players/players.html',
					title: 'Players',
					controller: 'players',
					controllerAs: 'vm',
					resolve: {
						topScorers: function (playersResolver){
							return playersResolver.topScorers();
						}
					}
				}
			},
			{
				url: '/players/:playerId',
				config: {
					templateUrl: 'app/players/player.html',
					title: 'Player',
					controller: 'player',
					controllerAs: 'vm',
					resolve: {
						player: function ($route, playersResolver){
							return playersResolver.player($route.current.params.playerId);
						},
						clubs: function (playersResolver){
							return playersResolver.clubs();
						}
					}
				}
			}

		];
	}

})();