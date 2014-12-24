(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('ViewCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$filter', 'ngTableParams', 'gameRepo', ViewCtrl]); 
	
	// Ng-Table to display User's Claimed Redemption Keys, the data consists of username, email, bundlename, gamename, redemptionkey, timestamp (see below under filter for each of the description)    
	function ViewCtrl($rootScope, $scope, $state, $stateParams, $filter, ngTableParams, gameRepo) {
	
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.$stateParams.gamename = $stateParams.gamename;
		console.log($stateParams.gamename);
		
		// get, all gameBundle ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {				
				$scope.gamerepo = gamerepo;

			    var data = gamerepo;
				
				var getName = $stateParams.gamename;
				
				$scope.unclaimedTable = new ngTableParams({
			        page: 1,            // show first page
			        count: 10,          // count per page
			        filter: {
						//'gamename': Test,			// initial filter (working)					
						'gamename': getName,			// initial filter
						'keystatus': 'true'		// initial filter
			        }
			    }, {
			        total: data.length, // length of data
			        getData: function($defer, params) {
			            // use build-in angular filter
			            var orderedData = params.filter() ?
			                   $filter('filter')(data, params.filter()) :
			                   data;

			            $scope.unclaimedkeys = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

			            params.total(orderedData.length); // set total for recalc pagination
			            $defer.resolve($scope.unclaimedkeys);
			        }
			    });
				
				$scope.claimedTable = new ngTableParams({
			        page: 1,            // show first page
			        count: 10,          // count per page
			        filter: {
						//'gamename': Test,			// initial filter (working)
						'gamename': getName,			// initial filter						
						'keystatus': 'false'	// initial filter
			        }
			    }, {
			        total: data.length, // length of data
			        getData: function($defer, params) {
			            // use build-in angular filter
			            var orderedData = params.filter() ?
			                   $filter('filter')(data, params.filter()) :
			                   data;

			            $scope.claimedkeys = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

			            params.total(orderedData.length); // set total for recalc pagination
			            $defer.resolve($scope.claimedkeys);
			        }
			    });

			});
		};

		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();

	};

})();