(function loopsq() {

    var while1 = {
        title: 'While',
        task: 'Wat denk jij dat tekst gaat zijn? Test of je gelijk hebt.',
        templateurl: 'views/loops/while1.html',
        code: 'var x = 0;\nvar tekst = \'A\';\n\nwhile(x < 3) {\n\ttekst = tekst + \'A\';\n\tx = x + 1;\n}',
        validate: function validateCode(code, next) {
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
        validate: function validateCode(code, next) {
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

    var while3 = {
        title: 'While',
        task: 'Welke waarde heeft x op het einde? Test of je gelijk hebt.',
        templateurl: 'views/loops/while3.html',
        code: 'var x = 0;\nwhile(x < 10) {\n\tx += 3;\n}',
        validate: function validateCode(code, next) {
            try {
                var result = eval(code);
                if (typeof x === 'number') {
                    next(null, 'x is ' + x);
                } else {
                    next('Oei oei, er ging iets mis.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var while4 = {
        title: 'While',
        task: 'Vul de while in zodat x 4 wordt.',
        templateurl: 'views/loops/while3.html',
        code: 'var x = 0;\nwhile( ) {\n\tx += 2;\n}',
        validate: function validateCode(code, next) {
            try {
                var result = eval(code);
                if (typeof x === 'number') {
                    if (x === 4) {
                        next(null, 'x is ' + x);
                    } else {
                        next('x is ' + x);
                    }
                } else {
                    next('Oei oei, er ging iets mis.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var while5 = {
        title: 'While',
        task: 'Vul de while in zodat tekst \'XYXY\' wordt.',
        templateurl: 'views/loops/while5.html',
        code: 'var tekst = \'\';\nwhile( ) {\n\ttekst += \'XY\';\n}',
        validate: function validateCode(code, next) {
            try {
                var result = eval(code);
                if (typeof tekst === 'string') {
                    if (tekst === 'XYXY') {
                        next(null, 'tekst is ' + tekst);
                    } else {
                        next('tekst is ' + tekst);
                    }
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
        task: 'Wat denk jij dat tekst gaat zijn? Test of je gelijk hebt.',
        templateurl: 'views/loops/for1.html',
        code: 'var tekst = \'A\';\n\nfor(var i = 0; i < 3; ++i) {\n\ttekst = tekst + \'A\';\n}',
        validate: function validateCode(code, next) {
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
        templateurl: 'views/loops/for2.html',
        code: 'var tekst = \'A\';\n\nfor(var i = 0; i < 3; ++i) {\n\ttekst = tekst + \'A\';\n}',
        validate: function validateCode(code, next) {
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

    var for3 = {
        title: 'For',
        task: 'Welke waarde heeft x op het einde? Test of je gelijk hebt.',
        templateurl: 'views/loops/while3.html',
        code: 'var x = 0;\nfor(var i = 0; i < 3; ++i) {\n\tx += 2;\n}',
        validate: function validateCode(code, next) {
            try {
                var result = eval(code);
                if (typeof x === 'number') {
                    next(null, 'x is ' + x);
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
                return while3;
            } else if (question === 4) {
                return while4;
            } else if (question === 5) {
                return while5;
            } else if (question === 6) {
                return for1;
            } else if (question === 7) {
                return for2;
            } else if (question === 8) {
                return for3;
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