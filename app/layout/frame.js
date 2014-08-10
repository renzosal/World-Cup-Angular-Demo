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
            radius: 40,
            lines: 7,
            length: 0,
            width: 30,
            speed: 1.7,
            corners: 1.0,
            trail: 100,
            color: '#FBB018'
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
