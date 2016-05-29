(function() {
  'use strict';
    angular.module('twitterPrecio')
      .controller('twitterPrecioController', twitterPrecioController);

      twitterPrecioController.$inject = ['twitterPrecioService'];

      function twitterPrecioController(twitterPrecioService){
        var vm = this;

        vm.onSearch = onSearch;
        vm.searchedTweets = [];
        vm.query = "";
        function onSearch(query){
          vm.query = query;
          vm.searchedTweets = twitterPrecioService.getTweetList();
        }
      }
}());
