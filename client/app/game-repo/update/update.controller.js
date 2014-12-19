(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('UpdateCtrl', ['$scope', '$filter', 'ngTableParams', 'gameRepo', UpdateCtrl]);

	// UpdateCtrl requires 2 actions of CRUD, 
	// 'R' as in retrieve, 'U' as in update
	function UpdateCtrl($scope, $filter, ngTableParams, gameRepo) {

		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};			
	
		// prepare to add update
		$scope.add = function(getName) {
			var add_gamerepo = gameRepo.get({ gamename: getName }, function() {
				$scope.add_gamerepo = add_gamerepo;
			}); 
		};			
		
		// prepare to update
		$scope.update = function() {
			$scope.add_gamerepo.gamename = $scope.add_gamerepo._gamename;
			var update = gameRepo.update($scope.add_gamerepo, function() {
				//$scope.edit($scope.add_gamerepo._gamename);			
				$scope.formData.$save($scope.add_gamerepo._gamename);
				//$scope.submit();
			});
		};
		
		// post, gameRepo creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };		

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
			$scope.formData = new gameRepo();
		};

		$scope.initialize();
	};
})();