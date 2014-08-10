(function () {
	'use strict';

/**
 * @desc partition filter to break up arrays according to the number passed and return small arrays.
 * @file filters.js
 * @example <div class="row" ng-repeat="rows in foos | partition:3">
 */
	angular
		.module('app')
		.filter('partition', partition);

	function partition() {
		var cache = {};
		var filter = function(arr, size){
			if(!arr) { return; }
			var newArr = [];
			for(var i=0; i < arr.length; i+=size){
				newArr.push(arr.slice(i, i+size));
			}
			var arrString = JSON.stringify(arr);
			var fromCache = cache[arrString+size]
			if(JSON.stringify(fromCache) === JSON.stringify(newArr)){
				return fromCache;
			}
			cache[arrString+size] = newArr;
			return newArr;
		};
		return filter;
	}

})();