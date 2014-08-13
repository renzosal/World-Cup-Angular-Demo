(function () {
	'use strict';

	var controllerId = 'frame';

	angular
		.module('app')
		.controller(controllerId, frame);

	frame.$inject = ['$rootScope'];

	function frame ($rootScope) {
		var vm = this;
		vm.busyMessage = "Please Wait...";
		vm.isBusy = true;
		vm.spinnerOptions = {
            radius: 20,
            lines: 10,
            length: 10,
            width: 8,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#97be65'
		};

		$rootScope.$on('$routeChangeStart',
			function(event, next, current) {
				toggleSpinner(true);
			});

		$rootScope.$on('$routeChangeSuccess',
			function(event, next, current) {
				toggleSpinner(false);
			});

		function toggleSpinner(on) { vm.isBusy = on; }
	}

})();
