'use strict';

describe('Controller: RetrieveCtrl', function () {

  // load the controller's module
  beforeEach(module('gamerepoApp'));

  var RetrieveCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RetrieveCtrl = $controller('RetrieveCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
