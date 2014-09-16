(function (){
	'use strict';

/**
 * @desc spinner directive to display on route loading
 * @file directive.js
 * @example <div data-wc-spinner="spinnerOptions"></div>
 */

	angular
		.module('app')
		.directive('wcSpinner', wcSpinner);

		wcSpinner.$inject = ['$window'];

		function wcSpinner ($window) {
			var directive = {
				link: link,
				restrict: 'EA'
			};

			return directive;

			function link(scope, element, attrs){
				scope.spinner = null;
				scope.$watch(attrs.wcSpinner, function(options){
					if(scope.spinner){
						scope.spinner.stop();
					}
					scope.spinner = new $window.Spinner(options);
					scope.spinner.spin(element[0]);
				}, true);
			}
		}

/**
 * @desc ngAnimate Directive to disable ngAnimate on carousel(breaks it)
 * @file directive.js
 * @example <carousel disable-ng-animate></carousel>
 */

 	angular
 		.module('app')
 		.directive('disableNgAnimate', disableNgAnimate);

 		disableNgAnimate.$inject = ['$animate'];

 		function disableNgAnimate ($animate) {
 			var directive = {
 				restrict: 'A',
 				link: link
 			};

 			return directive;

 			function link (scope, element) {
 				$animate.enabled(false, element);
 				console.log($animate);
 			}
 		}


/**
 * @desc wcBracket directive to generate the second stage bracket
 * @file directive.js
 * @example <div wc-bracket></div>
 */

 	angular
 		.module('app')
 		.directive('wcBracket', wcBracket);

 		function wcBracket () {
 			var directive = {
 				restrict: 'AE',
 				scope: {
 					bracket: '=wcBracket'
 				},
 				link: link,
 				templateUrl: 'app/dashboard/bracket.html?v=2' 
 			};

 			return directive;

 			function link (scope, element) {
 			}
 		}
})();