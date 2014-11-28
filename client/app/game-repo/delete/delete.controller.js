(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('DeleteCtrl', ['$scope', 'gameRepo', DeleteCtrl]);

	// DeleteCtrl requires for this module requires 2 actions of CRUD
	// R as in retrieve all, D as in delete 
	function DeleteCtrl($scope, gameRepo) {

		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gameRepo = gameRepo.query(function() {
				$scope.gameRepo = gameRepo;
			});
		};

		// delete, gameRepo ('D' in Crud)
		$scope.delete = function(id) {
			gameRepo.delete({ id: id }, function() {
				$scope.initialize();
			});
		};

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameRepo();
			$scope.formData.gamename = [{'name':''}];
		};

		$scope.initialize();
	};

})();