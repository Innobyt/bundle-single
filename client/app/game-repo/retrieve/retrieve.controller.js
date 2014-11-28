(function() {
	'use strict';

	angular.module('gamerepoApp')
	  .controller('RetrieveCtrl', ['$scope', 'gamerepo', RetrieveCtrl]);

	// RetrieveCtrl requires 1 actions of CRUD, R as in retrieve
	function RetrieveCtrl($scope, gamerepo) {

		// get, all gamerepo ('R' in Crud)
		$scope.readall = function(){
			var gamerepo = gamerepo.query(function() {
				$scope.gamerepo = gamerepo;
			});
		};

		// initialize gamerepo controller and services
		$scope.initialize = function(){
			$scope.readall();
		};

		$scope.initialize();
	};
})();