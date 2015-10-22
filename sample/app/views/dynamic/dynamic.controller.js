;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('DynamicController', DynamicController);

  DynamicController.$inject = ['$state'];

  function DynamicController($state){
    this.mainOptions = {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff']
    };
  }

})();
