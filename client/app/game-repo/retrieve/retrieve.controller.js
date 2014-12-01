(function() {
	'use strict';

	// Mon, December 1, 2014 fix, comments (you can delete these comments): 
	// I have commented out, various code in order to get this module working properly.
	// You will have to, uncomment you features, and fix them.

	angular.module('gamerepoApp')//, ['ngTable'])
	  .controller('RetrieveCtrl', ['$scope', /*$filter, ngTableParams,*/ 'gameRepo', RetrieveCtrl]);

	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gameRepo) {

		console.log('now this is loaded');

		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gameRepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};
		
		// var data = $scope.readall();	
		
		// $scope.tableParams = new ngTableParams({
  //       page: 1,            // show first page
  //       count: 10,          // count per page
  //       filter: {
  //           gamename: 'game1234'       // initial filter
  //       }
  //   }, {
  //       total: data.length, // length of data
  //       getData: function($defer, params) {
  //           // use build-in angular filter
  //           var orderedData = params.filter() ?
  //                  $filter('filter')(data, params.filter()) :
  //                  data;

  //           $scope.gamerepos = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

  //           params.total(orderedData.length); // set total for recalc pagination
  //           $defer.resolve($scope.gamerepos);
  //       }
  //   });
		
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
	};
})();