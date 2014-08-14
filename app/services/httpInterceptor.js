(function () {
	'use strict';

	angular
		.module('app')
		.factory('httpInterceptor', httpInterceptor);

	httpInterceptor.$inject = ['$q', 'config', 'localStorageFactory'];

	function httpInterceptor($q, config, localStorageFactory) {
		var interceptor = {
			request: request
		};

		return interceptor;

		function request (requestConfig) {
			
			//Apply apiKey to all kimonolab api calls
			if(requestConfig.url.indexOf(config.apiUrl) != -1){

				var separator = requestConfig.url.indexOf('?') === -1 ? '?' : '&';
				requestConfig.url += separator + 'apikey=' + config.apiKey;
				requestConfig.cache = localStorageFactory;
			}
			return requestConfig || $q.when(requestConfig);
		}

	}

})();