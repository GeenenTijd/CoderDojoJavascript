include(['vars.questions', 'ifelse.questions', 'loops.questions', 'functions.questions'], function (varq, ifelseq, loopsq, functionsq) {
    'use strict';

    var self = {
        currentCategory: null,
        currentQuestion: 0,
        question: null,
        nextAllowed: false,
        loadQuestion: loadQuestion,
        saveQuestion: saveQuestion
    };

    function verifyPermission() {
        if ('localStorage' in window && window['localStorage'] !== null) {

            var storageVar = localStorage[self.currentCategory];
            if (typeof storageVar === 'undefined') {
                return self.currentQuestion === 0;
            }

            var storageQuestion = parseInt(storageVar);
            if (self.currentQuestion < storageQuestion) {
                self.nextAllowed = true;
            }

            if (self.currentQuestion === 0) {
                return true;
            }
            return self.currentQuestion <= storageQuestion;
        } else if (self.currentQuestion === 0) {
            return true;
        }
        return false;
    }

    function validCategory() {
        return self.currentCategory === 'variables' || self.currentCategory === 'ifelse' || self.currentCategory === 'loops' || self.currentCategory === 'functions';
    }

    function retrieveQuestion() {
        if (self.currentCategory === 'variables') {
            if (self.currentQuestion < varq.length) {
                self.question = varq[self.currentQuestion];
            } else {
                self.question = null;
            }
        } else if (self.currentCategory === 'ifelse') {
            if (self.currentQuestion < ifelseq.length) {
                self.question = ifelseq[self.currentQuestion];
            } else {
                self.question = null;
            }
        } else if (self.currentCategory === 'loops') {
            if (self.currentQuestion < loopsq.length) {
                self.question = loopsq[self.currentQuestion];
            } else {
                self.question = null;
            }
        } else if (self.currentCategory === 'functions') {
            if (self.currentQuestion < functionsq.length) {
                self.question = functionsq[self.currentQuestion];
            } else {
                self.question = null;
            }
        } else {
            self.question = null;
        }
        return self.question;
    }

    function loadQuestion() {
        var query = window.location.search.substring(1);
        var vars = query.split("&");
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");
            if (pair[0] === 'category') {
                self.currentCategory = pair[1];
            } else if (pair[0] === 'question') {
                self.currentQuestion = parseInt(pair[1]);
            }
        }

        self.nextAllowed = false;

        if (!validCategory()) {
            self.currentCategory = 'variables';
        }
        if (verifyPermission()) {
            return retrieveQuestion();
        } else {
            if ('localStorage' in window && window['localStorage'] !== null) {

                var storageVar = localStorage[self.currentCategory];
                if (typeof storageVar === 'undefined') {
                    self.currentQuestion = 0;
                } else {
                    self.currentQuestion = parseInt(storageVar);
                }

                self.currentQuestion = parseInt(localStorage[self.currentCategory]);
            } else {
                self.currentQuestion = 0;
            }
            history.replaceState(null, '', 'questions.html?category=' + self.currentCategory + '&question=' + self.currentQuestion);
            return retrieveQuestion();
        }
    }

    function save() {
        localStorage.setItem(self.currentCategory, self.currentQuestion);
    }

    function saveQuestion() {
        ++self.currentQuestion;
        if ('localStorage' in window && window['localStorage'] !== null) {
            var storageVar = localStorage[self.currentCategory];
            if (typeof storageVar === 'undefined') {
                if (self.currentQuestion === 1) {
                    save();
                }
            } else if (parseInt(storageVar) < self.currentQuestion) {
                save();
            }
        }

        history.pushState(null, '', 'questions.html?category=' + self.currentCategory + '&question=' + self.currentQuestion);
    }

    return self;
});