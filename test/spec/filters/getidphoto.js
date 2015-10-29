'use strict';

describe('Filter: getIdPhoto', function () {
  var $filter;

  // load the filter's module
  beforeEach(function(){
    module('flickrApp');
  });

  // initialize a new instance of the filter before each test

  beforeEach(inject(function (_$filter_) {
    $filter = _$filter_;
  }));

  it('should return the input prefixed with "getIdPhoto filter:"', function () {

    expect($filter('getIdPhoto')('https://www.flickr.com/photos/treesquirrel/22506059865/')).toBe('22506059865');
  });

});
