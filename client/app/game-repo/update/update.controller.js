(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('UpdateCtrl', ['$scope', '$filter', 'ngTableParams', 'gameRepo', UpdateCtrl]);

	// UpdateCtrl requires 2 actions of CRUD, 
	// 'R' as in retrieve, 'U' as in update
	function UpdateCtrl($scope, $filter, ngTableParams, gameRepo) {

		// put, gameRepo update ('U' in Crud)
		$scope.update = function() {
			var update = gameRepo.update($scope.add_gamerepo, function() {
				$scope.edit($scope.add_gamerepo.gamename);
				$scope.submit();
			});
		};
		
		// post, gameRepo creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };		

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.formData = new gameRepo();
		};

		$scope.initialize();
	};
})();