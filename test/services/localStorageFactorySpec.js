'use strict';
describe('localStorageFactory', function () {

	var localStorageFactory,
		localStore,
		config;

	beforeEach(module("app"));


	beforeEach(function () {
		localStore = {};

		inject(function (_localStorageFactory_, _config_, $window) {
			localStorageFactory = _localStorageFactory_;
			config = _config_;

			spyOn($window.localStorage, 'getItem').andCallFake(function(key) {
				return localStore[key];

			});

			spyOn($window.localStorage, 'setItem').andCallFake(function(key, value) {
				localStore[key] =  value + '';
				return localStore[key];
			});

			spyOn($window.localStorage, 'removeItem').andCallFake(function(key){
				delete localStore[key];
			});
			
			spyOn($window.localStorage, 'clear').andCallFake(function () {
				localStore = {};
			});
		});
	});

	it('should have get, put, remove, removeAll defined', function () {
		expect(localStorageFactory.get).toBeDefined();
		expect(localStorageFactory.put).toBeDefined();
		expect(localStorageFactory.remove).toBeDefined();
		expect(localStorageFactory.removeAll).toBeDefined();
	});

	it('should put  key value in localStorage', function () {
		localStorageFactory.put('myKey', {dataKey: 'dataValue'});

		expect(Object.keys(localStore).length).toEqual(1);
		expect(localStore[ config.CachePrefix + 'myKey']).toEqual('{"dataKey":"dataValue"}');
	});

	it('should get value in localStorage with key', function () {
		localStorageFactory.put('myKey', {"data":"myValue"});
		var result = localStorageFactory.get('myKey');

		expect(result).toEqual('myValue');
	});

	it('should remove value in localStorage with key', function () {

		localStorageFactory.put('myKey', {"data":"myValue"});

		expect(Object.keys(localStore).length).toEqual(1);

		localStorageFactory.remove('myKey');

		expect(Object.keys(localStore).length).toEqual(0);

	});

	it('should removeAll values in localStorage', function () {

		localStorageFactory.put('myKey', {"data":"myValue"});
		localStorageFactory.put('myKey2', {"data":"myValue"});
		localStorageFactory.put('myKey3', {"data":"myValue"});

		expect(Object.keys(localStore).length).toEqual(3);

		localStorageFactory.removeAll();

		expect(Object.keys(localStore).length).toEqual(0);

	});

});