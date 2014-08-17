(function () {
	'use strict';

	var secondStageMatchIds = {
		round16: [
			"746A89A2-BD74-4B49-8C51-9830ADDEE0E0", 
			"46E089F0-EC3B-453D-8143-DF38FA43B9C3", 
			"4A1442F9-C2FD-4ACA-855A-2A8F9C9F1D99",
			"FE173702-5266-4C67-8647-7A6A53ED0DE8",
			"B0337D6A-353C-4C38-A8FE-700286BEA735",
			"04A376C8-CD37-4618-96F8-43BD877AAC22",
			"7E3B172B-B30B-4017-8C99-E06BF722997E",
			"73DC5E6C-A8B7-482B-9690-EF7797E3F2A8"],
		quarters: [
			"1A6D8A53-208B-4717-A406-A407BB54483F",
			"099FC6DE-2612-4970-A8E2-E0F38BB53642",
			"C2245465-756E-4A5E-9552-98E6634E670D",
			"8DE8FC6A-E60A-4EC1-9B1B-6E633507ADF6"],
		semis: [
			"B339282C-067B-4370-BE45-1F93E6C9CF7B",
			"D332F200-9972-4AB6-B2B9-A08394EEDFBC"],
		thirdPlace: [
			"90A553D9-FE31-4488-AA9D-259CAA4FB63B"],
		final: [
			"B534D283-9A91-45C2-BD8B-E9FC76C8CEDA"]
	};

	var config = {
		appErrorPrefix: '[World Cup Error]: ',
		CachePrefix: '[World Cup Cache]: ',
		imagePath: '../assets/images/',
		secondStageMatchIds: secondStageMatchIds,
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