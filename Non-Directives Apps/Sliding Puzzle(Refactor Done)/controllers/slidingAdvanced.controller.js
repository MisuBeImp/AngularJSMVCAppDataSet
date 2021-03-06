(function() {
    'use strict';
    function constructor()
    {
        var vm = this;
        vm.puzzles = [
            { src: 'images/misko.jpg', title: 'Miško Hevery', rows: 4, cols: 4 },
            { src: 'images/igor.jpg', title: 'Igor Minár', rows: 3, cols: 3 },
            { src: 'images/vojta.jpg', title: 'Vojta Jína', rows: 4, cols: 3 }
        ];
    }
    constructor.$inject = [];
    angular.module('puzzleApp').controller('slidingAdvancedController', constructor);
})();