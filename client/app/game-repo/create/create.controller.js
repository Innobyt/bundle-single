(function() {
	'use strict';

	angular.module('gamebundleApp')
	  .controller('CreateCtrl', ['$scope', 'gameBundle', CreateCtrl]);

	// CreateCtrl requires 1 actions of CRUD, C as in create
	function CreateCtrl($scope, gameBundle) {

		// initialize gamebundle controller and services
		$scope.initialize = function(){
			$scope.formData = new gameBundle();
		};

		// post, gamebundle creation ('C' in Crud)
		$scope.submit = function() {
			$scope.formData.$save(function(){ $scope.initialize(); });
		 };

		$scope.initialize();
	};
})();