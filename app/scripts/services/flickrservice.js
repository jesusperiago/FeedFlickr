'use strict';

/**
 * @ngdoc service
 * @name flickrApp.FlickrService
 * @description
 * # FlickrService
 * Service in the flickrApp.
 */
var apiKey,
  jsonFlickrApi;
angular.module('flickrApp')
  .factory('FlickrService', function ($http) {
    apiKey = '3071693b0807e1a7acca88fc5a010e2f';
    return{

        getOneFeed: function(id, callback)
          {
            $http.jsonp('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key='+apiKey+'&photo_id='+id+'&format=json')
              .success(function(data){
                return data;
              });
            jsonFlickrApi = function(data)
            {
              callback(data);
            };
          },
        getUrlPhoto: function(input, callback)
          {
            var farmId = input.farm;
            var serverId = input.server;
            var id = input.id;
            var secret = input.secret;
            var mstzb = 'm';

            var url = 'https://farm'+farmId+'.staticflickr.com/'+serverId+'/'+id+'_'+secret+'_'+mstzb+'.jpg';
            callback(url);
          }
    };
  });
