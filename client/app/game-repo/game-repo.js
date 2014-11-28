'use strict';

angular.module('gamerepoApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('gamerepo-create', {
        url: '/game-repo/create',
        templateUrl: 'app/game-repo/create/create.html',
        controller: 'CreateCtrl'
      })
      .state('gamerepo-retrieve', {
        url: '/game-repo/retrieve',
        templateUrl: 'app/game-repo/retrieve/retrieve.html',
        controller: 'RetrieveCtrl'
      })
      .state('gamerepo-view', {
        url: '/game-repo/view/:id',
        templateUrl: 'app/game-repo/view/view.html',
        controller: 'ViewCtrl'
      })
      .state('gamerepo-update', {
        url: '/game-repo/update',
        templateUrl: 'app/game-repo/update/update.html',
        controller: 'UpdateCtrl'
      })
      .state('gamerepo-delete', {
        url: '/game-repo/delete',
        templateUrl: 'app/game-repo/delete/delete.html',
        controller: 'DeleteCtrl'
      });
  });