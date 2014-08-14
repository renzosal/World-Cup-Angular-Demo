(function () {
	'use strict';

	angular
		.module('app')
		.factory('localStorageFactory', localStorageFactory);

	localStorageFactory.$inject = ['$window', '$cacheFactory', 'config'];

	function localStorageFactory ($window, $cacheFactory, config) {

		var pre = config.CachePrefix;
		var localCache = $cacheFactory('localCache',{

		});

			localCache.get = get;
			localCache.put = put;
			localCache.remove = remove;
			localCache.removeAll = removeAll;

		return localCache;


		function remove(key) {
			$window.localStorage.removeItem(pre + key);
		}

		function removeAll(){
			$window.localStorage.clear();
		}

		function get(key) {
			var result = $window.localStorage.getItem(pre + key);
			if(result){
				result = JSON.parse(result);
				return result.data;
			}

			return;
		}

		function put(key, value){
			if (typeof value.then === 'function') {
				value.then(function(value) {
					$window.localStorage.setItem(pre + key, JSON.stringify(value));
				});
			} else {
				$window.localStorage.setItem(pre + key, JSON.stringify(value));
			}

			return;
		}

	}
})();