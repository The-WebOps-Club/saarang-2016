'use strict';

describe('Controller: ProshowsCtrl', function () {

  // load the controller's module
  beforeEach(module('saarang2016App'));

  var ProshowsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProshowsCtrl = $controller('ProshowsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ProshowsCtrl.awesomeThings.length).toBe(3);
  });
});
