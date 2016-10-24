(function() {

  'use strict';

  angular
    .module('myApp.components.coffee', [])
    .controller('coffeeController', coffeeController);

  coffeeController.$inject = ['$scope', 'coffeeService'];

  function coffeeController($scope, coffeeService) {
    /*jshint validthis: true */
    const vm = this;
    vm.form = false;
    vm.coffeeObj = init();
    vm.showForm = function() {
      vm.form = !vm.form;
    };
    vm.addCoffee = function() {
      coffeeService.addCoffee(vm.coffeeObj);
      vm.coffeeObj = init();
    };
    coffeeService.getAllCoffee()
    .then((coffees) => {
      vm.coffee = coffees.data.data;
    })
    .catch((err) => {
      console.log(err);
    });
    // coffeeService.getSingleCoffee(1)
    // .then((coffee) => {
    //   console.log(coffee);
    // })
    // .catch((err) => {
    //   console.log(err);
    // });
  }

  function init() {
    const coffeeObj = {
      name: 'Christmas',
      roaster: 'Sweet Bloom',
      origin: 'Dereks Mom',
      roast: 'Medium',
      caffeine: 1,
      decaf: 'true',
      price: 88,
      quantity: 1
    };
    return coffeeObj;
  }

})();
