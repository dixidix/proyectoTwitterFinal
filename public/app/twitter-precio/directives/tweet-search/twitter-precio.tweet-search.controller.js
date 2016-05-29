(function() {
  'use strict';
  angular.module('twitterPrecio')
    .controller('tweetSearchController', tweetSearchController);

    tweetSearchController.$inject = ['twitterPrecioService'];

    function tweetSearchController(twitterPrecioService){
      var vm = this;
      vm.searchTweets = searchTweets;

      function searchTweets(query){
        vm.searching = true;
        twitterPrecioService.searchTweets(query).then(function(){
            vm.onSearch({query: query});
            vm.searching = false;
        });
      }
    }
}());
