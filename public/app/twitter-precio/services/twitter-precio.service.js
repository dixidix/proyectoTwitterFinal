(function() {
  'use strict';
  angular.module('twitterPrecio')
    .factory('twitterPrecioService', twitterPrecioService);

    twitterPrecioService.$inject = ['$q', '$http'];

    function twitterPrecioService($q, $http){
      var publicInterface = {
        getTweetList: getTweetList,
        searchedTweets: [],
        searchTweets: searchTweets
      }
      return publicInterface;

      function getTweetList(){
        return publicInterface.searchedTweets;
      }

      function searchTweets(query){
        var config = {
          url: "/twitter-precio",
          method: "POST",
          data: {
            query: query
          }
        }
        return $http(config).then(function(response){
            console.log(response);

          if(response.data && response.data.statuses){
            var conGeo = response.data.statuses.filter(function(status){
              if(status.geo !== null) return status;
            })
            console.log("conGeo", conGeo);
            publicInterface.searchedTweets = response.data.statuses;
          }
          return;
        });
      }
    }
}());
