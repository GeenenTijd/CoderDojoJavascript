include(['questions'], function (questions) {
    'use strict';
    var App = {
        editor: null,
        finishedTitle: 'Proficiat',
        finishedText: '<p>Je hebt alle oefeningen gemaakt. Je kan met een volgende reeks aan de slag.</p>',
        finishedTask: '<a href="index.html">Ga terug naar start</a>'
    };

    App.showCorrect = function (result) {
        var elem = document.getElementById("result");
        elem.className = 'correct';
        elem.innerHTML = result;
        document.getElementById("next").disabled = false;
    };

    App.showError = function (result) {
        var elem = document.getElementById("result");
        elem.className = 'wrong';
        elem.innerHTML = result;
    };

    App.goNext = function () {
        var elem = document.getElementById("result");
        elem.className = '';
        elem.innerHTML = '';

        App.questions.saveQuestion();
        App.startQuestion();
    };

    App.startQuestion = function () {
        var question = App.questions.loadQuestion();
        if (question) {
            document.getElementById("title").innerHTML = question.title;
            document.getElementById("description").innerHTML = question.description;
            document.getElementById("task").innerHTML = question.task;

            if (question.clearCode) {
                if (typeof question.code !== 'undefined') {
                    App.editor.setValue(question.code);
                } else {
                    App.editor.setValue('');
                }
            }

            document.getElementById("next").disabled = !App.questions.nextAllowed;

            App.editor.focus();
        } else {
            App.showEnd();
        }
    };

    App.validate = function () {
        if (questions.question) {
            questions.question.validate(App.editor.getValue(), function (error, result) {
                if (error) {
                    App.showError(error);
                } else {
                    App.showCorrect(result);
                }
                App.editor.focus();
            });
        } else {
            App.showEnd();
        }
    };

    App.showEnd = function () {
        App.editor.setValue('');
        document.getElementById("next").disabled = true;
        document.getElementById("title").innerHTML = App.finishedTitle;
        document.getElementById("description").innerHTML = App.finishedText;
        document.getElementById("task").innerHTML = App.finishedTask;
    };

    App.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        mode: 'javascript '
    });
    App.questions = questions;

    // localStorage.clear();

    document.getElementById("next").disabled = true;
    document.getElementById("test").addEventListener("click", App.validate);
    document.getElementById("next").addEventListener("click", App.goNext);
    window.onpopstate = App.startQuestion;

    App.startQuestion();

});