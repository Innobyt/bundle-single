(function() {
	'use strict';

	// Mon, December 1, 2014 fix, comments (you can delete these comments): 
	// I have commented out, various code in order to get this module working properly.
	// You will have to, uncomment you features, and fix them.

	angular.module('gamerepoApp')
	  .controller('RetrieveCtrl', ['$scope', $filter, ngTableParams, 'gameRepo', RetrieveCtrl]);

	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gameRepo) {

		console.log('now this is loaded');
		
		var data = $scope.gameRepo;	
		
		$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
						gamename: 'game1234',       // initial filter for gamename
						gamekeys: '', // search for gamekeys
						keystatus: '' // Has to implement as "Available" and "Claimed", not sure how to create the status as this.
					}
					
			},
			{
				total: data.length, // length of data
				getData: function($defer, params) {
				
				// use build-in angular filter
				var orderedData = params.sorting() ?
					$filter('orderBy')(data, params.orderBy()) :
					data;
				
				orderedData = params.filter() ?
					$filter('filter')(orderedData, params.filter()) :
					orderedData;

				console.log(orderedData.length);
				params.total(orderedData.length); // set total for recalc pagination
				$defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
				}			
			});
			
		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};
		
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
		
	};
})();