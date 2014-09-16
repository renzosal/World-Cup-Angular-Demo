'use strict';

describe('HttpInterceptor', function () {

	var httpProvider,
			httpInterceptor,
			localStorageFactory,
			httpBackend,
			config;

	beforeEach(module('app', function ($httpProvider) {

		httpProvider = $httpProvider;

	}));
	
	beforeEach(inject(function (_httpInterceptor_, _config_, _localStorageFactory_){
		
		localStorageFactory = _localStorageFactory_;
		httpInterceptor = _httpInterceptor_;
		config = _config_;

	}));		

	it('should have httpInterceptor defined', function () {

		expect(httpInterceptor).toBeDefined();

	});

	it('should have httpInterceptor as an httpProvider', function () {

		expect(httpProvider.interceptors).toContain('httpInterceptor');

	});

	it('should append an api token in the http request url for kimonolab api calls', function () {
		
		var requestConfig = httpInterceptor.request({url: config.apiUrl});

		expect(requestConfig.url).toEqual(config.apiUrl + '?apikey=' + config.apiKey);

	});

	it('should not place an api token in the http request url for non kimonolab api calls', function () {
		
		var requestConfig = httpInterceptor.request({url: 'http://anotherUrl/'});

		expect(requestConfig.url).toEqual('http://anotherUrl/');

	});

	it('should assign localStorage caching for kimonolab api calls', function () {
		
		var requestConfig = httpInterceptor.request({url: config.apiUrl});

		expect(requestConfig.cache).toEqual(localStorageFactory);

	});

	it('should not assign caching for non kimonolab api calls', function () {
		
		var requestConfig = httpInterceptor.request({url: 'http://anotherUrl/'});

		expect(requestConfig.cache).not.toBeDefined();

	});

});