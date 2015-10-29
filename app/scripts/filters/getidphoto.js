'use strict';

/**
 * @ngdoc filter
 * @name flickrApp.filter:getIdPhoto
 * @function
 * @description
 * # getIdPhoto
 * Filter in the flickrApp.
 */
angular.module('flickrApp')
  .filter('getIdPhoto', function () {
    return function (input) {
      var id = input.split('/')[5];
      return id;
    };
  });
