var App = (function () {
    'use strict';

    var currentQuestion = 0;
    var editor = null;
    var nextEnabled = false;
    var questions = [];

    function getCode() {
        return editor.getValue();
    }

    function showCorrect(result) {
        var elem = document.getElementById("result");
        elem.className = 'correct';
        elem.innerHTML = result;

        nextEnabled = true;
        document.getElementById("next").disabled = false;
    }

    function showError(result) {
        var elem = document.getElementById("result");
        elem.className = 'wrong';
        elem.innerHTML = result;
    }

    function goNext() {
        currentQuestion++;
        nextEnabled = false;
        document.getElementById("next").disabled = true;

        var elem = document.getElementById("result");
        elem.className = '';
        elem.innerHTML = '';

        loadQuestion();
    }

    function loadQuestion() {
        if (currentQuestion < questions.length) {
            document.getElementById("question").innerHTML = questions[currentQuestion].question;

            if (questions[currentQuestion].clearCode) {
                editor.setValue('');
            }

        } else {
            document.getElementById("question").innerHTML = '<h2>Proficiat</h2><p>Je hebt alle oefeningen gemaakt. Je bent klaar om aan de slag te gaan met javascript.</p>';
        }
    }

    function validate() {
        if (currentQuestion < questions.length) {
            questions[currentQuestion].validate();
        } else {
            document.getElementById("question").innerHTML = '<h2>Proficiat</h2><p>Je hebt alle oefeningen gemaakt. Je bent klaar om aan de slag te gaan met javascript.</p>';
        }
    }

    var activate = function () {
        editor = CodeMirror.fromTextArea(document.getElementById("code"), {
            lineNumbers: true,
            styleActiveLine: true,
            matchBrackets: true
        });

        // TODO: add all questions
        questions = [numberQuestion, nameQuestion, nameLengthQuestion, booleanQuestion, variableQuestion];

        loadQuestion();

        document.getElementById("next").disabled = true;

        document.getElementById("test").addEventListener("click", validate);
        document.getElementById("next").addEventListener("click", goNext);
    };

    activate();

    return {
        getCode: getCode,
        showCorrect: showCorrect,
        showError: showError
    };

})();