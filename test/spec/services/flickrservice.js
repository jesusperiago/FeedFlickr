'use strict';

describe('Service: FlickrService', function () {

  // load the service's module
  beforeEach(module('flickrApp'));

  // instantiate service
  var FlickrService;
  beforeEach(inject(function (_FlickrService_) {
    FlickrService = _FlickrService_;
  }));

  it('should do something', function () {
    expect(!!FlickrService).toBe(true);
  });

});
