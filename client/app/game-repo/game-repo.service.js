(function() {
	'use strict';

	angular
	    .module('gamerepoApp')
	    .factory('gameRepo', ['$resource', gameRepo]);

	function gameRepo($resource) {
		return $resource('/api/game-repo/:id', {}, {
			update: { method: 'PUT', params: { id: '@id' } },
			query: { method: 'GET', isArray: false }
		});
	}
})();