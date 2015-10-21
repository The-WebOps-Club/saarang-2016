'use strict';

describe('Controller: WcsCtrl', function () {

  // load the controller's module
  beforeEach(module('saarang2016App'));

  var WcsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WcsCtrl = $controller('WcsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WcsCtrl.awesomeThings.length).toBe(3);
  });
});
