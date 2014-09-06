include(['questions'], function (questions) {
	'use strict';

	var App = {
		editor: null,
		currentQuestion: 0,
		nextEnabled: false,
		questions: questions,
		finishedTitle: 'Proficiat',
		finishedText: '<p>Je hebt alle oefeningen gemaakt. Je kan met een volgende reeks aan de slag.</p>',
		finishedTask: '<a href="index.html">Ga terug naar start</a>'
	};

	App.showCorrect = function (result) {
		var elem = document.getElementById("result");
		elem.className = 'correct';
		elem.innerHTML = result;

		App.nextEnabled = true;
		document.getElementById("next").disabled = false;
	};

	App.showError = function (result) {
		var elem = document.getElementById("result");
		elem.className = 'wrong';
		elem.innerHTML = result;
	};

	App.goNext = function () {
		App.currentQuestion++;
		App.nextEnabled = false;
		document.getElementById("next").disabled = true;

		var elem = document.getElementById("result");
		elem.className = '';
		elem.innerHTML = '';

		App.loadQuestion();
	};

	App.loadQuestion = function () {
		if (App.currentQuestion < App.questions.length) {

			var question = App.questions[App.currentQuestion];

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

		} else {
			App.showEnd();
		}
	};

	App.validate = function () {
		if (App.currentQuestion < App.questions.length) {
			App.questions[App.currentQuestion].validate(App.editor.getValue(), function (error, result) {
				if (error) {
					App.showError(error);
				} else {
					App.showCorrect(result);
				}
			});
		} else {
			App.showEnd();
		}
	};

	App.showEnd = function () {

		document.getElementById("next").innerHTML = 'Naar start';

		App.editor.setValue('');
		document.getElementById("title").innerHTML = App.finishedTitle;
		document.getElementById("description").innerHTML = App.finishedText;
		document.getElementById("task").innerHTML = App.finishedTask;
	};

	App.editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		lineNumbers: true,
		styleActiveLine: true,
		matchBrackets: true
	});

	App.loadQuestion();
	document.getElementById("next").disabled = true;
	document.getElementById("test").addEventListener("click", App.validate);
	document.getElementById("next").addEventListener("click", App.goNext);
});