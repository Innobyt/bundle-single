(function() {
	'use strict';
	
	angular.module('gamerepoApp')
	  .controller('RetrieveCtrl', ['$scope', '$filter', 'ngTableParams', 'gameRepo', RetrieveCtrl]);
	
	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, $filter, ngTableParams, gameRepo) {
			
		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};
		
		// prepare to view update
		$scope.view = function(gamename) {
			$scope.view_gamerepo = gamename;
			}; 
		
		// prepare to add update
		$scope.add = function(gamename) {
			$scope.add_gamerepo = gamename;
			}; 
		
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
		
	};
})();