(function() {
	'use strict';

	var serviceId = 'datacontext';

	angular
		.module('app')
		.factory(serviceId,datacontext);

	datacontext.$inject = ['$http', '$q', 'config', '$timeout'];

	function datacontext($http, $q, config, $timeout) {
		var $q = $q,
			$timeout = $timeout,
			apiUrl = config.apiUrl,
			apiKey = config.apiKey;

			//teams = [{"name":"Algeria","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/78.png","website":"http://www.faf.org.dz","foundedYear":1962,"address":"Chemin Ahmed Ouaked, Dely-Ibrahin\nAlger","homeStadium":"Stade du 5 Juillet 1962","stadiumCapacity":80200,"group":"H","groupRank":2,"groupPoints":4,"matchesPlayed":3,"wins":1,"losses":1,"draws":1,"goalsFor":6,"goalsAgainst":5,"goalsDiff":"+1","id":"5841CDD6-D35C-4A2C-B063-0DF8529CB433","type":"Team"},{"name":"Argentina","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/132.png","website":"http://www.afa.org.ar","foundedYear":1893,"address":"Viamonte 1366/76\n1053\nBuenos Aires, Ciudad de Buenos Aires","homeStadium":"Estadio Monumental Antonio Vespucio Liberti","stadiumCapacity":65645,"group":"F","groupRank":1,"groupPoints":9,"matchesPlayed":3,"wins":3,"losses":0,"draws":0,"goalsFor":6,"goalsAgainst":3,"goalsDiff":"+3","id":"8DF9E0C5-F49F-4BCC-967D-EC4FF3C945EE","type":"Team"},{"name":"Australia","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/156.png","website":"http://www.footballaustralia.com.au","foundedYear":1961,"address":"Locked Bag A 4071\nNSW 1235\nSydney","homeStadium":"ANZ Stadium","stadiumCapacity":83500,"group":"B","groupRank":4,"groupPoints":0,"matchesPlayed":3,"wins":0,"losses":3,"draws":0,"goalsFor":3,"goalsAgainst":9,"goalsDiff":"-6","id":"16EF7687-2D69-473C-BFE7-B781D67752DC","type":"Team"},{"name":"Belgium","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/281.png","website":"http://www.footbel.com","foundedYear":1895,"address":"145, avenue Houba de Strooper\n1020\nBruxelles (Brussel)","homeStadium":"Stade Roi Baudouin","stadiumCapacity":50093,"group":"H","groupRank":1,"groupPoints":9,"matchesPlayed":3,"wins":3,"losses":0,"draws":0,"goalsFor":4,"goalsAgainst":1,"goalsDiff":"+3","id":"AEA9A2F1-3A08-4149-96BD-A6F7433F46BA","type":"Team"},{"name":"Bosnia-Herzegovina","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/299.png","website":"http://www.nfsbih.ba","foundedYear":1992,"address":"Ferhadija 30\n71000\nSarajevo","homeStadium":"Olimpijski Stadion Asim Ferhatović Hase","stadiumCapacity":35630,"group":"F","groupRank":3,"groupPoints":3,"matchesPlayed":3,"wins":1,"losses":2,"draws":0,"goalsFor":4,"goalsAgainst":4,"goalsDiff":"+0","id":"74EA3831-DA4A-4093-B1E3-FD4EB45AA798","type":"Team"},{"name":"Brazil","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/349.png","website":"http://www.cbf.com.br","foundedYear":1914,"address":"Rua Victor Civita 66 Bloco 1, Edifico 5\n22775-044\nRio de Janeiro, Rio de Janeiro","homeStadium":"Estádio Cícero Pompeu de Toledo (Morumbi)","stadiumCapacity":73501,"group":"A","groupRank":1,"groupPoints":7,"matchesPlayed":3,"wins":2,"losses":0,"draws":1,"goalsFor":7,"goalsAgainst":2,"goalsDiff":"+5","id":"09B8CB53-BB56-4B7E-86BD-EC7FC7CEAF33","type":"Team"},{"name":"Cameroon","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/386.png","website":"http://www.fecafootonline.com","foundedYear":1959,"address":"Avenue du 27 août 1940, Tsinga\n1116\nYaoundé","homeStadium":"Stade Omnisport Ahmadou Ahidjo","stadiumCapacity":38509,"group":"A","groupRank":4,"groupPoints":0,"matchesPlayed":3,"wins":0,"losses":3,"draws":0,"goalsFor":1,"goalsAgainst":9,"goalsDiff":"-8","id":"DF25ABB8-37EB-4C2A-8B6C-BDA53BF5A74D","type":"Team"},{"name":"Chile","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/424.png","website":"http://www.anfp.cl","foundedYear":1895,"address":"Avenida Quilín 5635, Comuna Peñalolén\nSantiago de Chile","homeStadium":"Estadio Nacional Julio Martínez Prádanos","stadiumCapacity":66660,"group":"B","groupRank":2,"groupPoints":6,"matchesPlayed":3,"wins":2,"losses":1,"draws":0,"goalsFor":5,"goalsAgainst":3,"goalsDiff":"+2","id":"9A319800-C80A-4FD9-9679-125D27246FB0","type":"Team"},{"name":"Colombia","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/473.png","website":"http://www.fcf.com.co/","foundedYear":1924,"address":"Avenida 32 no. 16-22\nBogotá D.C.","homeStadium":"Estadio Metropolitano Roberto Meléndez","stadiumCapacity":49612,"group":"C","groupRank":1,"groupPoints":9,"matchesPlayed":3,"wins":3,"losses":0,"draws":0,"goalsFor":9,"goalsAgainst":2,"goalsDiff":"+7","id":"AD00D1E4-BA78-41B6-A7DF-E6E102F71042","type":"Team"},{"name":"Costa Rica","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/477.png","website":"http://www.fedefutbol.com","foundedYear":1921,"address":"Radial Santa Ana Belén\n670-1000\nSan José","homeStadium":"Estadio Nacional de Costa Rica","stadiumCapacity":35093,"group":"D","groupRank":1,"groupPoints":7,"matchesPlayed":3,"wins":2,"losses":0,"draws":1,"goalsFor":4,"goalsAgainst":1,"goalsDiff":"+3","id":"F77B348A-D7AE-4534-8ADA-8E52BEE64744","type":"Team"},{"name":"Côte d'Ivoire","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/598.png","website":"http://www.fif-ci.com","foundedYear":1960,"address":"Boîte postale 1202\nAbidjan","homeStadium":"Stade Félix Houphouët-Boigny","stadiumCapacity":45000,"group":"C","groupRank":3,"groupPoints":3,"matchesPlayed":3,"wins":1,"losses":2,"draws":0,"goalsFor":4,"goalsAgainst":5,"goalsDiff":"-1","id":"6B2A7C79-3758-421C-8967-7ABFE1FDC982","type":"Team"},{"name":"Croatia","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/514.png","website":"http://www.hns-cff.hr","foundedYear":1912,"address":"Rusanova 13\n10000\nZagreb","homeStadium":"Stadion Maksimir","stadiumCapacity":37168,"group":"A","groupRank":3,"groupPoints":3,"matchesPlayed":3,"wins":1,"losses":2,"draws":0,"goalsFor":6,"goalsAgainst":6,"goalsDiff":"+0","id":"A0CD1355-B6FC-48D3-B67B-AF5AA2B2C1E1","type":"Team"},{"name":"Ecuador","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/657.png","website":"http://www.ecuafutbol.org","foundedYear":1925,"address":"Avenida Las Aguas y Calle Alianza\n593\nGuayaquil","homeStadium":"Estadio Olímpico Atahualpa","stadiumCapacity":40958,"group":"E","groupRank":3,"groupPoints":4,"matchesPlayed":3,"wins":1,"losses":1,"draws":1,"goalsFor":3,"goalsAgainst":3,"goalsDiff":"+0","id":"8BABAAE8-D906-44F7-B784-A828573B35D9","type":"Team"},{"name":"England","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/774.png","website":"http://www.thefa.com","foundedYear":1863,"address":"PO Box 1966\nSW1P 9EQ\nLondon","homeStadium":"Wembley Stadium","stadiumCapacity":90000,"group":"D","groupRank":4,"groupPoints":1,"matchesPlayed":3,"wins":0,"losses":2,"draws":1,"goalsFor":2,"goalsAgainst":4,"goalsDiff":"-2","id":"2EFCFEB2-EBF8-4628-B659-B00C49D93811","type":"Team"},{"name":"France","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/944.png","website":"http://www.fff.fr","foundedYear":1919,"address":"87, boulevard de Grenelle\n75738\nParis","homeStadium":"Stade de France","stadiumCapacity":81338,"group":"E","groupRank":1,"groupPoints":7,"matchesPlayed":3,"wins":2,"losses":0,"draws":1,"goalsFor":8,"goalsAgainst":2,"goalsDiff":"+6","id":"4F9F018B-C14D-4E73-8145-2E77B8C64E9E","type":"Team"},{"name":"Germany","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1037.png","website":"http://www.dfb.de","foundedYear":1900,"address":"Otto-Fleck-Schneise 6\n60528\nFrankfurt am Main","homeStadium":"Olympiastadion Berlin","stadiumCapacity":77116,"group":"G","groupRank":1,"groupPoints":7,"matchesPlayed":3,"wins":2,"losses":0,"draws":1,"goalsFor":7,"goalsAgainst":2,"goalsDiff":"+5","id":"FE173702-5266-4C67-8647-7A6A53ED0DE8","type":"Team"},{"name":"Ghana","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1038.png","website":"http://www.ghanafa.org","foundedYear":1957,"address":"South East Ridge\n19338\nAccra","homeStadium":"Ohene Djan Sports Stadium","stadiumCapacity":35000,"group":"G","groupRank":4,"groupPoints":1,"matchesPlayed":3,"wins":0,"losses":2,"draws":1,"goalsFor":4,"goalsAgainst":6,"goalsDiff":"-2","id":"CCC66F75-7004-46E4-BB31-259B06A42516","type":"Team"},{"name":"Greece","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1091.png","website":"http://www.epo.gr","foundedYear":1926,"address":"Goudi Park\n11510\nAthína (Athens)","homeStadium":"Olympiako Stadio Spyros Louis","stadiumCapacity":71030,"group":"C","groupRank":2,"groupPoints":4,"matchesPlayed":3,"wins":1,"losses":1,"draws":1,"goalsFor":2,"goalsAgainst":4,"goalsDiff":"-2","id":"38C4D44E-CDA3-40E2-8364-DA27CC190C52","type":"Team"},{"name":"Honduras","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1099.png","website":"http://www.fenafuth.org","foundedYear":1951,"address":"Avenida Roble Edificio Plaza América 1 y 2 Nivel\nTegucigalpa","homeStadium":"Estadio Tiburcio Carías Andino","stadiumCapacity":35000,"group":"E","groupRank":4,"groupPoints":0,"matchesPlayed":3,"wins":0,"losses":3,"draws":0,"goalsFor":1,"goalsAgainst":8,"goalsDiff":"-7","id":"17E2DCED-76BB-435D-9E96-68D5B3D490FA","type":"Team"},{"name":"Iran","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1178.png","website":"http://www.ffiri.ir","foundedYear":1920,"address":"No. 2/2 Third St. Seoul Avenue\n19958-73591\nTehrān (Teheran)","homeStadium":"Azadi Stadium","stadiumCapacity":99885,"group":"F","groupRank":4,"groupPoints":1,"matchesPlayed":3,"wins":0,"losses":2,"draws":1,"goalsFor":1,"goalsAgainst":4,"goalsDiff":"-3","id":"A6F97883-74FE-4162-A65E-10B3D94B71A3","type":"Team"},{"name":"Italy","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1318.png","website":"http://www.figc.it","foundedYear":1898,"address":"Via Gregorio Allegri\n198\nRoma","homeStadium":"Stadio Olimpico","stadiumCapacity":82656,"group":"D","groupRank":3,"groupPoints":3,"matchesPlayed":3,"wins":1,"losses":2,"draws":0,"goalsFor":2,"goalsAgainst":3,"goalsDiff":"-1","id":"B61B25AA-CD8E-4778-AC26-DD08D7851990","type":"Team"},{"name":"Japan","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1348.png","website":"http://www.jfa.or.jp","foundedYear":1921,"address":"JFA House Football Avenue, Bunkyo-ku\n113-8311\nTōkyō (Tokyo)","homeStadium":"National Olympic Stadium","stadiumCapacity":57363,"group":"C","groupRank":4,"groupPoints":1,"matchesPlayed":3,"wins":0,"losses":2,"draws":1,"goalsFor":2,"goalsAgainst":6,"goalsDiff":"-4","id":"F71A08CF-B3C5-414C-9144-308A5EE6DACC","type":"Team"},{"name":"Korea Republic","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1385.png","website":"http://www.kfa.or.kr","foundedYear":1933,"address":"1-131 Sinmunno, 2-ga Jongno-Gu\n110-062\nSeoul","homeStadium":"Seoul World Cup Stadium","stadiumCapacity":68476,"group":"H","groupRank":4,"groupPoints":1,"matchesPlayed":3,"wins":0,"losses":2,"draws":1,"goalsFor":3,"goalsAgainst":6,"goalsDiff":"-3","id":"8D6EAC04-14E9-4026-BF2A-AB81C4F3C529","type":"Team"},{"name":"Mexico","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1497.png","website":"http://www.femexfut.org.mx","foundedYear":1927,"address":"Colima #373, Colonia Roma Norte, Del. Cuauhtémoc\n6700\nCoyoacán, Ciudad de México (D.F.)","homeStadium":"Estadio Azteca","stadiumCapacity":106187,"group":"A","groupRank":2,"groupPoints":7,"matchesPlayed":3,"wins":2,"losses":0,"draws":1,"goalsFor":4,"goalsAgainst":1,"goalsDiff":"+3","id":"E0D48500-EF6D-40AC-A7A0-0F4B5BD59A9D","type":"Team"},{"name":"Netherlands","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1552.png","website":"http://www.knvb.nl","foundedYear":1889,"address":"Woudenbergseweg 56-58\n3700 AM\nZeist","homeStadium":"Amsterdam ArenA","stadiumCapacity":53052,"group":"B","groupRank":1,"groupPoints":9,"matchesPlayed":3,"wins":3,"losses":0,"draws":0,"goalsFor":10,"goalsAgainst":3,"goalsDiff":"+7","id":"FB6842E6-BB62-450D-98C0-A062610E6518","type":"Team"},{"name":"Nigeria","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1567.png","website":"http://www.nigeriaff.com","foundedYear":1945,"address":"Olusegun Obasanjo Way\nAbuja","homeStadium":"Abuja National Stadium","stadiumCapacity":60491,"group":"F","groupRank":2,"groupPoints":4,"matchesPlayed":3,"wins":1,"losses":1,"draws":1,"goalsFor":3,"goalsAgainst":3,"goalsDiff":"+0","id":"028EDCA8-6D1E-49CC-8442-A7A12E921E09","type":"Team"},{"name":"Portugal","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1772.png","website":"http://www.fpf.pt","foundedYear":1914,"address":"Rua Alexandre Herculano 58\n1250-012\nLisboa","homeStadium":"Estádio Nacional","stadiumCapacity":37593,"group":"G","groupRank":3,"groupPoints":4,"matchesPlayed":3,"wins":1,"losses":1,"draws":1,"goalsFor":4,"goalsAgainst":7,"goalsDiff":"-3","id":"F5280217-C808-4E1D-BB0E-BF4445687EC5","type":"Team"},{"name":"Russia","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/1878.png","website":"http://www.rfs.ru","foundedYear":1912,"address":"ul. Narodnaya 7\n115172\nMoskva","homeStadium":"Olimpiyskiy stadion Luzhniki","stadiumCapacity":84745,"group":"H","groupRank":3,"groupPoints":2,"matchesPlayed":3,"wins":0,"losses":1,"draws":2,"goalsFor":2,"goalsAgainst":3,"goalsDiff":"-1","id":"BBBE6B39-E345-43C7-9E31-A442A866BF60","type":"Team"},{"name":"Spain","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/2137.png","website":"http://www.rfef.es","foundedYear":1913,"address":"Ramón y Cajal\n28230\nLas Rozas","homeStadium":"Estadio Santiago Bernabéu","stadiumCapacity":85454,"group":"B","groupRank":3,"groupPoints":3,"matchesPlayed":3,"wins":1,"losses":2,"draws":0,"goalsFor":4,"goalsAgainst":7,"goalsDiff":"-3","id":"05A7BADE-915A-4AFB-8C28-702069220E43","type":"Team"},{"name":"Switzerland","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/2201.png","website":"http://www.football.ch","foundedYear":1895,"address":"Worbstrasse 48\n3000\nBern","homeStadium":"St. Jakob-Park","stadiumCapacity":38512,"group":"E","groupRank":2,"groupPoints":6,"matchesPlayed":3,"wins":2,"losses":1,"draws":0,"goalsFor":7,"goalsAgainst":6,"goalsDiff":"+1","id":"496A037B-FD32-4917-93E6-335D76C3422C","type":"Team"},{"name":"United States","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/2281.png","website":"http://www.ussoccer.com","foundedYear":1913,"address":"1801 South Prairie Ave\n90266\nChicago, Illinois","homeStadium":"Robert F. Kennedy Memorial Stadium","stadiumCapacity":56692,"group":"G","groupRank":2,"groupPoints":4,"matchesPlayed":3,"wins":1,"losses":1,"draws":1,"goalsFor":4,"goalsAgainst":4,"goalsDiff":"+0","id":"820A471B-4B85-41E8-97A6-BC3063FE78D9","type":"Team"},{"name":"Uruguay","logo":"http://cache.images.globalsportsmedia.com/soccer/teams/150x150/2300.png","website":"http://www.auf.org.uy","foundedYear":1900,"address":"Guayabo 1531\n11200\nMontevideo","homeStadium":"Estadio Centenario","stadiumCapacity":73609,"group":"D","groupRank":2,"groupPoints":6,"matchesPlayed":3,"wins":2,"losses":1,"draws":0,"goalsFor":4,"goalsAgainst":4,"goalsDiff":"+0","id":"088C4113-CEFC-460C-830C-277C148C0CE7","type":"Team"}];

		var service = {
			getAllMatches: getAllMatches,
			getMatchById: getMatchById,
			getAllGroups: getAllGroups,
			getSecondStageMatches: getSecondStageMatches,
			getAllTeams: getAllTeams,
			getTeamByName: getTeamByName,
			getAllPlayers: getAllPlayers,
			getTopScorers: getTopScorers,
			getPlayersByCountry: getPlayersByCountry,
			getPlayerById: getPlayerById,
			getAllClubs: getAllClubs
		};

		return service;

		function getAllMatches() {

			var promise = $http
				.get(apiUrl + 'matches',
					{
						params: {
							sort: 'startTime,1',
							includes: 'home,away'
						}
					})
					.then(function (response) {
						return response.data;
					});

			return promise;
						
		}

		function getMatchById(matchId){
			var promise = $http
				.get(apiUrl + 'matches/' + matchId,
				{
					params: {
						includes: 'home,away'
					}
				})
				.then(function(response){
					return response.data;
				});
			return promise;
		}

		function getSecondStageMatches() {
			var promise = $http
				.get(apiUrl + 'matches',
					{
						params: {
							sort: 'startTime,1',
							includes: 'home,away'
						}
					})
					.then(function (response) {
						var secondStage = _.where(response.data, {'group': null});
						
						return secondStage;
					});

			return promise;				
		}

		function getAllGroups() {
			
			var promise = $http
				.get(apiUrl + 'teams',
					{
						params: {
							
							//fields: 'name,logo,group,groupRank,groupPoints,wins,losses,draws,goalsFor,goalsAgainst,goalsDiff'
						}
					}).then(function (response) {

						var groupedArray = _(response.data).groupBy("group").each(function (value,key,list){
							list[key] = _(value).sortBy('groupPoints').reverse().value();
						}).value();

						return groupedArray;
					});

			return promise;
			
		}

		function getAllTeams() {

			var promise = $http
				.get(apiUrl + 'teams',
				{
					params: {
						sort: 'name'
					}
				}).then(function (response) {
					return response.data;
				});

			return promise;
		}

		function getTeamByName(name) {
			var promise = $http
				.get(apiUrl + 'teams',
				{
					params: {
						name: name,
						limit: 1
					}
				}).then(function (response) {
					return response.data;			
				});

			return promise;
		}

		function getAllPlayers() {
			var promise = $http
				.get(apiUrl + 'players',
				{
					params: {
						fields: 'id,nickname,nationality,age,position,image',
						sort: 'lastName',
						limit: '1000'
					}
				})
				.then(function (response) {
					return response.data;
				});
			return promise;
		}

		function getPlayersByCountry(country){
			var promise = $http
				.get(apiUrl + 'players',
				{
					params: {
						nationality: country
					}
				})
				.then(function (response) {
					return response.data;
				});

			return promise;
		}

		function getPlayerById(playerId){
			var promise = $http
				.get(apiUrl + 'players/' + playerId, 
				{
					cache: false,
					params: {
						includes: 'player_season_stats,club'
					}
				})
				.then(function(response) {
					return response.data;
				});

			return promise;
		}

		function getAllClubs() {
			var promise = $http
				.get(apiUrl + 'clubs',
				{
					params:{
						fields: 'id,name,country,logo'
					}
				}).then(function (response){
					return response.data;
				});

			return promise;
		}

		function getTopScorers() {
			var promise = $http
				.get(apiUrl + 'players',{
					params: {
						sort: 'goals,-1',
						limit: 10
					}
				})
				.then(function (response){
					return response.data;
				});

			return promise;
		}
	}
})();