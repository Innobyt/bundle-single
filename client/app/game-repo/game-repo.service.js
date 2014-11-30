(function() {
	'use strict';

	angular
	    .module('gamerepoApp')
	    .factory('gamerepo', ['$resource', gamerepo]);

	function gamerepo($resource) {
		return $resource('/api/game-repo/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } }
		});
	}
})();