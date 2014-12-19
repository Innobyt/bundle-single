(function() {
	'use strict';
	
	angular.module('gamerepoApp')
	  .controller('ListingCtrl', ['$scope', '$filter', 'ngTableParams', 'ngTableExport', 'gameRepo', ListingCtrl]);
	
	// ListingCtrl requires 1 actions of CRUD, R as in retrieve
	function ListingCtrl($scope, $filter, ngTableParams, ngTableExport, gameRepo) {
			
		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};
		
		// prepare to view
		$scope.view = function(getName) {
			var view_gamerepo = gameRepo.get({ gamename: getName }, function() {
				$scope.view_gamerepo = view_gamerepo;
				$scope.viewpage(view_gamerepo);
			}); 
		};
		
		$scope.viewpage = function(gametitle) {				
				$scope.unclaimedTable = new ngTableParams({
			        page: 1,            // show first page
			        count: 10,          // count per page
			        filter: {
						'gamename': gametitle,			// initial filter
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
						'gamename': gametitle,			// initial filter
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
		};
		
		// prepare to add update
		$scope.add = function(getName) {
			var add_gamerepo = gameRepo.get({ gamename: getName }, function() {
				$scope.add_gamerepo = add_gamerepo;
			}); 
		};			
		
		// prepare to update
		$scope.update = function() {
			$scope.add_gamerepo.gamename = $scope.add_gamerepo.gamename;
			var update = gameRepo.update($scope.add_gamerepo, function() {
				$scope.edit($scope.add_gamerepo);
			});
		};
					
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
		
	};
})();