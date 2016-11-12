(function() {
    'use strict';
    function constructor()
    {
        var vm = this;
        vm.matrix = [
            ['N', 'I', 'G', 'O', 'R', 'Y', 'G', 'S', 'T', 'T', 'A', 'N'],
            ['O', 'G', 'G', 'U', 'L', 'C', 'O', 'E', 'P', 'E', 'A', 'S'],
            ['I', 'N', 'N', 'R', 'M', 'N', 'O', 'R', 'I', 'M', 'E', 'C'],
            ['T', 'I', 'A', 'I', 'O', 'E', 'G', 'V', 'R', 'P', 'V', 'E'],
            ['C', 'T', 'T', 'E', 'D', 'D', 'L', 'I', 'C', 'L', 'I', 'N'],
            ['E', 'S', 'J', 'P', 'U', 'N', 'E', 'C', 'S', 'A', 'T', 'A'],
            ['J', 'E', 'O', 'O', 'L', 'E', 'I', 'E', 'A', 'T', 'C', 'R'],
            ['N', 'T', 'V', 'C', 'E', 'P', 'J', 'B', 'V', 'E', 'E', 'I'],
            ['I', 'S', 'I', 'S', 'S', 'E', 'S', 'A', 'A', 'W', 'R', 'O'],
            ['O', 'K', 'S', 'I', 'M', 'D', 'E', 'S', 'J', 'O', 'I', 'M'],
            ['R', 'E', 'L', 'L', 'O', 'R', 'T', 'N', 'O', 'C', 'D', 'E']
        ];
        vm.words = [
            'BINDING', 'CONTROLLER', 'DEPENDENCY', 'DIRECTIVE', 'GOOGLE', 'IGOR', 'INJECTION', 'JAVASCRIPT',
            'MISKO', 'MODULES', 'SCENARIO', 'SCOPE', 'SERVICE', 'TEMPLATE', 'TESTING', 'VOJTA'
        ];
    }
    constructor.$inject = [];
    angular.module('puzzleApp').controller('wordSearchController', constructor);
})();