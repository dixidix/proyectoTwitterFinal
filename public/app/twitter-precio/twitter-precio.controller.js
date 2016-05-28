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
          console.log("se ejecuta este controller");
          vm.query = query;
          vm.searchedTweets = twitterPrecioService.getTweetList();
        }
      }
}());
