(function variables() {
    'use strict';

    function variablesController($location, $routeParams, progress, questions) {

        /* jshint validthis: true */
        var vm = this;

        /*jslint latedef:false*/
        vm.validate = validate;
        vm.goNext = goNext;
        vm.error = null;
        vm.result = null;
        vm.nextDisabled = true;

        activate();

        function activate() {

            vm.editor = CodeMirror.fromTextArea(document.getElementById('code'), {
                lineNumbers: true,
                styleActiveLine: true,
                matchBrackets: true,
                mode: 'javascript',
                viewportMargin: Infinity
            });

            vm.category = 'variables';
            vm.question = parseInt($routeParams.questionid);

            if (!progress.hasPermission(vm.category, vm.question)) {
                vm.question = progress.getLastQuestion(vm.category);
            }
            if (vm.question < progress.getLastQuestion(vm.category)) {
                vm.nextDisabled = false;
            }
            displayQuestion();
        }

        function displayQuestion() {
            var question = questions.getQuestion(vm.question);

            if (question) {
                vm.title = question.title;
                vm.task = question.task;
                vm.templateurl = question.templateurl;
                vm.questionValidate = question.validate;

                if (typeof question.code !== 'undefined') {
                    vm.editor.setValue(question.code);
                } else {
                    vm.editor.setValue('');
                }

                vm.editor.focus();
            } else {
                $location.path('/proficiat');
            }
        }

        function validate() {
            var code = vm.editor.getValue();
            vm.questionValidate(code, function validateResult(err, result) {
                if (err) {
                    vm.result = null;
                    vm.error = err;
                } else {
					console.log('WTF: ' + result);
                    vm.nextDisabled = false;
                    progress.save(vm.category, vm.question);
                    vm.error = null;
                    vm.result = result;
                }
            });
        }

        function goNext() {
            $location.path('/variables/' + (vm.question + 1));
        }
    }

    angular
        .module('coderDojoApp')
        .controller('variablesController', ['$location', '$routeParams', 'progressFactory', 'variablesQuestions', variablesController]);
})();