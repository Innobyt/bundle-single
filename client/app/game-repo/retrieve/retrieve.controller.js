(function() {
	'use strict';
	
	var Gametitles = require('../../../server/api/game-repo/gametitle.model');

	// Mon, December 1, 2014 fix, comments (you can delete these comments): 
	// I have commented out, various code in order to get this module working properly.
	// You will have to, uncomment you features, and fix them.

	angular.module('gamerepoApp')
	  .controller('RetrieveCtrl', ['$scope', $filter, ngTableParams, 'gameRepo', RetrieveCtrl]);
	
	// Building Custom Filter - Reference: http://stackoverflow.com/questions/18381944/ng-options-and-unique-filter-not-displaying-angular-js
	// and http://stackoverflow.com/questions/24832192/angularjs-how-to-get-the-unique-values-in-ng-option
	angular.module('gamerepoApp', [])
	   .filter('unique', function($parse) {
		  return function(input, filter) {
			if(angular.isArray(input)) {

			  //unique key
			  var getter = $parse(filter);

			  return _.uniq(input, function(elm) {
				  return getter(elm);
			  });
			}   
		   return input;
		  }
		});
	
	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gameRepo) {

		console.log('now this is loaded');
		
		var data = $scope.readall();
		
		console.log('Gametitles Data' + data);
		
		$scope.tableParams = new ngTableParams({
			page: 1,            // show first page
			count: 10,          // count per page
			filter: {
						gamename: 'game1234'       // initial filter for gamename
						gamekey: '' // search for gamekeys
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
			var gamerepo = Gametitles.find(function(err, gametitles)){
			if(err){ return next(err); }
			res.json(gametitles);
			console.log('Gamerepos Record' + gamerepo);
		});
		};
		
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
		
	};
})();