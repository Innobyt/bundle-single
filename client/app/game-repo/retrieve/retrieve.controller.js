(function() {
	'use strict';

	angular.module('gameRepoApp')
	  .controller('RetrieveCtrl', ['$scope', 'gameRepo', RetrieveCtrl]);

	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gameRepo) {

		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gameRepo = gameRepo.query(function() {
				$scope.gameRepo = gameRepo;
			});
		};

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.gameRepo = gamequery();
		};

		$scope.initialize();
	};
})();