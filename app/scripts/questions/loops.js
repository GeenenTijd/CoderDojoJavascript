(function () {

    var while1 = {
        title: 'While',
        task: 'Wat denk jij dat tekst gaat zijn? Test de code.',
        templateurl: 'views/loops/while1.html',
        code: 'var x = 0;\nvar tekst = \'A\';\n\nwhile(x < 3) {\n\ttekst = tekst + \'A\';\n\tx = x + 1;\n}',
        validate: function (code, next) {
            try {
                var result = eval(code);
                if (typeof tekst === 'string') {
                    next(null, 'tekst is ' + tekst);
                } else {
                    next('Oei oei, er ging iets mis.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var while2 = {
        title: 'While',
        task: 'Verander de code zodat tekst AAA wordt.',
        templateurl: 'views/loops/while2.html',
        code: 'var x = 0;\nvar tekst = \'A\';\n\nwhile(x < 3) {\n\ttekst = tekst + \'A\';\n\tx = x + 1;\n}',
        validate: function (code, next) {
            try {
                var result = eval(code);
                if (typeof tekst === 'string' && tekst === 'AAA') {
                    next(null, 'tekst is ' + tekst);
                } else if (typeof tekst === 'string') {
                    next('tekst is ' + tekst);
                } else {
                    next('Oei oei, er ging iets mis.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var for1 = {
        title: 'For',
        task: 'Wat denk jij dat tekst gaat zijn? Test de code.',
        templateurl: 'views/loops/for1.html',
        code: 'var tekst = \'A\';\n\nfor(var i = 0; i < 3; ++i) {\n\ttekst = tekst + \'A\';\n}',
        validate: function (code, next) {
            try {
                var result = eval(code);
                if (typeof tekst === 'string') {
                    next(null, 'tekst is ' + tekst);
                } else {
                    next('Oei oei, er ging iets mis.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var for2 = {
        title: 'For',
        task: 'Verander de code zodat tekst AAA wordt.',
        templateurl: 'views/loops/while1.html',
        code: 'var tekst = \'A\';\n\nfor(var i = 0; i < 3; ++i) {\n\ttekst = tekst + \'A\';\n}',
        validate: function (code, next) {
            try {
                var result = eval(code);
                if (typeof tekst === 'string' && tekst === 'AAA') {
                    next(null, 'tekst is ' + tekst);
                } else if (typeof tekst === 'string') {
                    next('tekst is ' + tekst);
                } else {
                    next('Oei oei, er ging iets mis.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    function loopsQuestions() {
        function getQuestion(question) {
            if (question === 1) {
                return while1;
            } else if (question === 2) {
                return while2;
            } else if (question === 3) {
                return for1;
            } else if (question === 4) {
                return for2;
            }
            return null;
        }
        return {
            getQuestion: getQuestion
        };
    }

    angular.module('coderDojoApp')
        .factory('loopsQuestions', [loopsQuestions]);
})();