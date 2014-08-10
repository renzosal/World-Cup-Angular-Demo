(function () {
	'use strict';

	angular
		.module('app')
		.factory('httpInterceptor', httpInterceptor);

	httpInterceptor.$inject = ['$q', 'config'];

	function httpInterceptor($q, config) {
		var interceptor = {
			request: request
		};

		return interceptor;

		function request (requestConfig) {
			
			//Apply apiKey to all kimonolab api calls
			if(requestConfig.url.indexOf(config.apiUrl) != -1){

				var separator = requestConfig.url.indexOf('?') === -1 ? '?' : '&';
				requestConfig.url += separator + 'apikey=' + config.apiKey;
			}
			return requestConfig || $q.when(requestConfig);
		}

	}

})();