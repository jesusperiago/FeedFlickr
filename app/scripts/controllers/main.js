'use strict';

/**
 * @ngdoc function
 * @name flickrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flickrApp
 */
var jsonFlickrFeed;
angular.module('flickrApp')
  .controller('MainCtrl', function ($scope,$http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http({
      method: 'JSONP',
      url: 'https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json'
    });

    jsonFlickrFeed = function(data){

      $scope.data = data.items;

    };

  });
