'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('flickrApp'));

  var MainCtrl, scope, http, jsonFlickrFeed;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http) {
    scope = {};
    http = $http;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope

    });

  }));
it('should be 2', function () {
  expect(scope.data.length).toBe(2);
});

});
