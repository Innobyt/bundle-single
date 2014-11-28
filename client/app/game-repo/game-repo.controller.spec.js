'use strict';

describe('Controller: GameRepoCtrl', function () {

  // load the controller's module
  beforeEach(module('gamerepoApp'));

  var GameRepoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GameRepoCtrl = $controller('GameRepoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
