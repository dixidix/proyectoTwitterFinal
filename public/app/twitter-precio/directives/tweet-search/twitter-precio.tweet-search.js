(function() {
  'use strict';
    angular.module('twitterPrecio')
      .directive('tweetSearch', tweetSearch);

    tweetSearch.$inject = [];

    function tweetSearch(){
      return {
        restrict: "A",
        templateUrl: "app/twitter-precio/directives/tweet-search/twitter-precio.tweet-search.html",
        scope: {
          onSearch: "&"
        },
        controller: "tweetSearchController",
        controllerAs: "vm",
        bindToController: true
      }
    }
}());
