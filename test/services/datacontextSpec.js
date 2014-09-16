'use strict';
//TODO: add httpBackend tests, currently not priority, all services
// do not manipulate data before returning
describe('DataContext', function (){

	var dataContext;

	beforeEach(module('app'));

	beforeEach(inject(function (_datacontext_){
		dataContext = _datacontext_;

	}));

	//Check if service methods are in place
	describe('Service Methods Defined', function () {

		it('should be defined: getAllMatches', function () {
				expect(dataContext.getAllMatches).toBeDefined();
				expect(angular.isFunction(dataContext.getAllMatches)).toBe(true);
		});	
		it('should be defined: getMatchById', function () {
				expect(dataContext.getMatchById).toBeDefined();
				expect(angular.isFunction(dataContext.getMatchById)).toBe(true);
		});	
		it('should be defined: getAllGroups', function () {
				expect(dataContext.getAllGroups).toBeDefined();
				expect(angular.isFunction(dataContext.getAllGroups)).toBe(true);
		});
		it('should be defined: getSecondStageMatches', function () {
				expect(dataContext.getSecondStageMatches).toBeDefined();
				expect(angular.isFunction(dataContext.getSecondStageMatches)).toBe(true);
		});
		it('should be defined: getAllTeams', function () {
				expect(dataContext.getAllTeams).toBeDefined();
				expect(angular.isFunction(dataContext.getAllTeams)).toBe(true);
		});
		it('should be defined: getTeamByName', function () {
				expect(dataContext.getTeamByName).toBeDefined();
				expect(angular.isFunction(dataContext.getTeamByName)).toBe(true);
		});
		it('should be defined: getAllPlayers', function () {
				expect(dataContext.getAllPlayers).toBeDefined();
				expect(angular.isFunction(dataContext.getAllPlayers)).toBe(true);
		});
		it('should be defined: getTopScorers', function () {
				expect(dataContext.getTopScorers).toBeDefined();
				expect(angular.isFunction(dataContext.getTopScorers)).toBe(true);
		});
		it('should be defined: getPlayersByCountry', function () {
				expect(dataContext.getPlayersByCountry).toBeDefined();
				expect(angular.isFunction(dataContext.getPlayersByCountry)).toBe(true);
		});
		it('should be defined: getPlayerById', function () {
				expect(dataContext.getPlayerById).toBeDefined();
				expect(angular.isFunction(dataContext.getPlayerById)).toBe(true);
		});
		it('should be defined: getAllClubs', function () {
				expect(dataContext.getAllClubs).toBeDefined();
				expect(angular.isFunction(dataContext.getAllClubs)).toBe(true);
		});
	});


});