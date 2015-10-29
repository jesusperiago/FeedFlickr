'use strict';

/**
 * @ngdoc function
 * @name flickrApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the flickrApp
 */
angular.module('flickrApp')
  .controller('FeedCtrl', function (FlickrService, $scope, $routeParams, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    FlickrService.getOneFeed($routeParams.id,function(resp)
    {
      $scope.data = resp.photo;
      console.log(resp);
      FlickrService.getUrlPhoto(resp.photo,function(url)
      {
        $scope.url=  url;
        $scope.description = resp.photo.description._content;
      });

    });
    $scope.back = function()
    {
      $location.url('/');
    };
  });
