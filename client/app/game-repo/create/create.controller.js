(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('CreateCtrl', ['$scope', 'gameRepo', CreateCtrl]);

	// CreateCtrl requires 1 actions of CRUD, C as in create
	function CreateCtrl($scope, gameRepo) {

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.formData = new gameRepo();
		};

		// post, gameRepo creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };
		
		//Not sure how to implement the watch.
		/*$scope.$watch("gamekeys", function() {
			var lines, lineNumber, data, length;
			$scope.gamekeysList = [];
			lines = $scope.gamekeys.split('\n');
			lineNumber = 0;
				for (var i = lines.length - 1; i >= 0; i--) {
				l = lines[i];

				lineNumber++;
				data = l.split(',');

				var gamekeysName = data[0];

				$scope.gamekeysList.push({
					gamekeys: gamekeysName
				});
			}
		});*/

		$scope.initialize();
	};
})();