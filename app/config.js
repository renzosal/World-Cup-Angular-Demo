(function () {
	'use strict';

	var keyCodes = {
		enter: 13,
		esc: 27,
		del: 46
	};

	var config = {
		appErrorPrefix: '[World Cup Error]: ',
		imagePath: '../assets/images/',
		keyCodes: keyCodes,
		appName: 'World Cup',
		version: '1.0',
		apiKey: '46afbf2f4ab7d1964a832a123ceade88',
		apiUrl: 'http://worldcup.kimonolabs.com/api/'
	};

	angular
		.module('app')
		.constant('config', config)
		.config(configuration);

		configuration.$inject = ['$logProvider', '$httpProvider'];

		function configuration($logProvider, $httpProvider) {

			configureLogging();
			configureLocalStorageInterceptor();

			function configureLogging() {
				if($logProvider.debugEnabled)
					$logProvider.debugEnabled(true);
			}

			function configureLocalStorageInterceptor() {
				$httpProvider.interceptors.push('httpInterceptor');
			}

		}

})();