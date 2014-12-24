(function() {
	'use strict';
	
	angular.module('gamerepoApp')
	  .controller('ListCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$filter', 'ngTableParams', 'gameRepo', ListCtrl]);
	
	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function ListCtrl($rootScope, $scope, $state, $stateParams, $filter, ngTableParams, gameRepo) {
	
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.$stateParams.gamename = $stateParams.gamename;
		console.log($stateParams.gamename);
		
		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};
		
		// prepare to view
		$scope.view = function(gamename) {
			var view_gamerepo = gameRepo.get({ gamename: gamename }, function() {
				$scope.view_gamerepo = view_gamerepo;
				console.log(view_gamerepo);
			}); 
		};
		
		// prepare to add update
		$scope.add = function(gamename) {
			var add_gamerepo = gameRepo.get({ gamename: gamename }, function() {
				$scope.add_gamerepo = add_gamerepo;
				console.log(add_gamerepo);
			}); 
		};			
		
		// prepare to update
		$scope.update = function() {
			var update = gameRepo.update($scope.add_gamerepo, function() {
				//$scope.edit($scope.add_gamerepo._gamename);			
				$scope.formData.$save($scope.add_gamerepo.gamename);
				console.log(update);
			});
		};
		
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
		
	};
})();