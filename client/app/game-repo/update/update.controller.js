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

		var data = $scope.readall();	
		
		 $scope.tableParams = new ngTableParams({
         page: 1,            // show first page
         count: 10,          // count per page
         filter: {
             gamename: 'game1234',       // initial filter for gamename
			 keystatus: '' // Has to implement as "Available" and "Claimed", not sure how to create the status as this.
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
			$scope.formData = new gameRepo();
		};

		$scope.initialize();
	};
})();