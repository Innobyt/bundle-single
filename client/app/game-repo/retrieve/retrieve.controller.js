(function() {
	'use strict';

	angular.module('gameRepoApp', ['ngTable'])
	  .controller('RetrieveCtrl', ['$scope', $filter, ngTableParams, 'gameRepo', RetrieveCtrl]);

	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gameRepo) {

		// get, all gameRepo ('R' in Crud)
		$scope.readall = function(){
			var gameRepo = gameRepo.query(function() {
				$scope.gameRepo = gameRepo;
			});
		};
		
		var data = $scope.readall();	
		
		$scope.tableParams = new ngTableParams({
        page: 1,            // show first page
        count: 10,          // count per page
        filter: {
            gamename: 'game1234'       // initial filter
        }
    }, {
        total: data.length, // length of data
        getData: function($defer, params) {
            // use build-in angular filter
            var orderedData = params.filter() ?
                   $filter('filter')(data, params.filter()) :
                   data;

            $scope.gamerepos = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count());

            params.total(orderedData.length); // set total for recalc pagination
            $defer.resolve($scope.gamerepos);
        }
    });
		
		// initialize gameRepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
	};
})();