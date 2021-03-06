(function() {

  'use strict';

  angular
    .module('myApp.services', [])
    .service('coffeeService', coffeeService);

  coffeeService.$inject = ['$http'];

  function coffeeService($http) {
    /*jshint validthis: true */
    const coffeeURL = 'http://localhost:8000/coffee';

    this.getAllCoffee = function () {
      return $http.get(coffeeURL);
    };
    this.getSingleCoffee = function (id) {
      return $http.get(`${coffeeURL}${id}`);
    };
    this.addCoffee = function (coffee) {
      return $http.post(coffeeURL, coffee);
    };

    this.test = 'does this work';
  }

})();
