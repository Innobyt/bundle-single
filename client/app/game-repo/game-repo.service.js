(function() {
	'use strict';

	angular
	    .module('gamerepoApp')
	    .factory('gameRepo', ['$resource', gameRepo]);

	function gameRepo($resource) {
		return $resource('/api/game-repo/:gamename', { gamename: "@gamename" }, 
		{
		  'create':  { method: 'POST' },
		  'index':   { method: 'GET', isArray: true },
		  'show':    { method: 'GET', isArray: false },
		  'update':  { method: 'PUT' },
		  'destroy': { method: 'DELETE' }
		});
	}
})();