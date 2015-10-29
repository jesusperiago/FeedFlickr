'use strict';

describe('Controller: FeedCtrl', function () {

  // load the controller's module
  beforeEach(module('flickrApp'));

  var FeedCtrl,
    scope,location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$location) {
    scope = $rootScope.$new();
    location = $location;
    FeedCtrl = $controller('FeedCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
