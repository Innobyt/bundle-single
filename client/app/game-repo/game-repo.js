'use strict';

angular.module('gamerepoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('create', {
        url: '/game-repo/create',
        templateUrl: 'app/game-repo/create/create.html',
        controller: 'CreateCtrl'
      })
      .state('list', {
        url: '/game-repo/list',
        templateUrl: 'app/game-repo/list/list.html',
        controller: 'ListCtrl'
      })
    .state('list.gamename', {
        url: '/game-repo/list/:gamename',
        templateUrl: 'app/game-repo/list/list.gamename.html',
        controller: function($scope, $stateParams) {
            $scope.gamename = $stateParams.gamename;
        }
    })
      .state('update', {
        url: '/game-repo/update',
        templateUrl: 'app/game-repo/update/update.html',
        controller: 'UpdateCtrl'
      })
      .state('update.gamename', {
        url: '/game-repo/update/:gamename',
        templateUrl: 'app/game-repo/update/update.gamename.html',
        controller: function($scope, $stateParams) {
            $scope.gamename = $stateParams.gamename;
        }
      })		  
      .state('view', {
        url: '/game-repo/view',
        templateUrl: 'app/game-repo/view/view.html',
        controller: 'ViewCtrl'
      })
      .state('view.gamename', {
        url: '/game-repo/view/:gamename',
        templateUrl: 'app/game-repo/view/view.gamename.html',
        controller: function($scope, $stateParams) {
            $scope.gamename = $stateParams.gamename;
        }
      });
  });