;(function() {
  'use strict';

  angular
    .module('sample-app')
    .controller('MainController', MainController);

  MainController.$inject = ['$state'];

  function MainController($state){

    var _this = this;

    this.mainOptions = {
      sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
			anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
			menu: '#menu'
    };

  }

})();
