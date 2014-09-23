(function () {
    'use strict';

    function proficiatController($location) {

        /* jshint validthis: true */
        var vm = this;

        /*jslint latedef:false*/
        vm.validate = validate;
        vm.goNext = goNext;
        vm.error = null;
        vm.result = null;
        vm.templateurl = 'views/proficiat.html';
        vm.title = 'Proficiat';
        vm.task = 'Ga terug naar start.';
        vm.nextDisabled = false;

        vm.editor = CodeMirror.fromTextArea(document.getElementById('code'), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true,
            mode: 'javascript'
        });

        function validate() {}

        function goNext() {
            $location.path('/');
        }
    }

    angular
        .module('coderDojoApp')
        .controller('proficiatController', ['$location', proficiatController]);
})();