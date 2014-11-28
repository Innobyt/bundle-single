(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('UpdateCtrl', ['$scope', 'gameRepo', UpdateCtrl]);

	// UpdateCtrl requires 2 actions of CRUD, 
	// 'R' as in retrieve, 'U' as in update
	function UpdateCtrl($scope, gameRepo) {

		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gameRepo = gameRepo.query(function() {
				$scope.gameRepo = gameRepo;
			});
		};

		// put, gameRepo update ('U' in Crud)
		$scope.update = function() {
			$scope.add_gamerepo.id = $scope.add_gamerepo._id;
			var update = gameRepo.update($scope.add_gamerepo, function() {
				$scope.edit($scope.add_gamerepo._id);
			});
		};

		// prepare to add update
		$scope.add = function(id) {
			var add_gamerepo = gameRepo.get({ id: id }, function() {
				$scope.add_gamerepo = add_gamerepo;
			});
		}; 

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameRepo();
		};

		$scope.initialize();
	};
})();