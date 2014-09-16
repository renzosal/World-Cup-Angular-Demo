'use strict';

describe('Filters', function () {

	beforeEach(module('app'));

	describe('Filter: startFrom', function () {

		var startFromFilter;
		var array;

		beforeEach(inject(function (_startFromFilter_) {
			array = [1,2,3,4,5,6,7,8,9,10];
			startFromFilter = _startFromFilter_;
		}));


		it('should create a shallow copy of array from index 5', function () {
			expect(startFromFilter(array, 5)).toEqual([6,7,8,9,10]);
		});

		it('should return empty array if value is greater than array', function () {
			expect(startFromFilter(array,10)).toEqual([]);
		});

	});
});