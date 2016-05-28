(function() {
  'use strict';
  angular.module('twitterPrecio', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/twitter-precio");

    $stateProvider
      .state('twitterPrecio', {
        url: "/twitter-precio",
        templateUrl: "app/twitter-precio/twitter-precio.html",
        controller: "twitterPrecioController",
        controllerAs: "vm"
      });
    });
}());
