(function ifelseq() {

    var if1 = {
        title: 'If',
        task: 'Vul je leeftijd in en test de code.',
        templateurl: 'views/ifelse/if1.html',
        code: 'var leeftijd = \nvar ikBenVolwassen = false;\n\nif(leeftijd > 18)\n{\n\tikBenVolwassen = true;\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(var leeftijd =)(\s[0-9]|[0-9])/g) === null) {
                next('Vul je leeftijd in.');
                return;
            }
            try {
                eval(code);
                if (ikBenVolwassen) {
                    next(null, 'ikBenVolwassen is waar');
                } else {
                    next(null, 'ikBenVolwassen is niet waar');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var if2 = {
        title: 'If',
        task: 'Verander de code zodat ikBenVolwassen waar wordt.',
        templateurl: 'views/ifelse/if2.html',
        code: 'var leeftijd = 12;\nvar ikBenVolwassen = false;\n\nif(leeftijd > 18)\n{\n\tikBenVolwassen = true;\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(var leeftijd =)(\s[0-9]|[0-9])/g) === null) {
                next('Vul je leeftijd in.');
                return;
            }
            try {
                eval(code);
                if (ikBenVolwassen) {
                    next(null, 'ikBenVolwassen is waar');
                } else {
                    next('Verander de code zodat ikBenVolwassen waar wordt.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var if3 = {
        title: 'If',
        task: 'Schrijf tussen de if haakjes code die waar is.',
        templateurl: 'views/ifelse/if3.html',
        code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if\((.{3,})\))/g) === null) {
                next('Schrijf code tussen de if haakjes.');
                return;
            }
            try {
                eval(code);
                if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben waar') {
                    next(null, 'Ik ben waar');
                } else {
                    next('Ik ben niet waar');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var if4 = {
        title: 'If',
        task: 'Schrijf tussen de if haakjes code die niet waar is.',
        templateurl: 'views/ifelse/if4.html',
        code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if\((.{3,})\))/g) === null) {
                next('Schrijf code tussen de if haakjes.');
                return;
            }
            try {
                eval(code);
                if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben niet waar') {
                    next(null, 'Ik ben niet waar');
                } else {
                    next('Ik ben waar');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var if5 = {
        title: 'If',
        task: 'Schrijf tussen de if haakjes code die waar is en gebruik &&',
        templateurl: 'views/ifelse/if5.html',
        code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if\((.{3,})\))/g) === null) {
                next('Schrijf code tussen de if haakjes.');
                return;
            }
            if (code.match(/(\&\&)/g) === null) {
                next('Gebruik &&.');
                return;
            }
            try {
                eval(code);
                if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben waar') {
                    next(null, 'Ik ben waar');
                } else {
                    next('Ik ben niet waar');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var if6 = {
        title: 'If',
        task: 'Schrijf tussen de if haakjes code die waar is en gebruik ||',
        templateurl: 'views/ifelse/if6.html',
        code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if\((.{3,})\))/g) === null) {
                next('Schrijf code tussen de if haakjes.');
                return;
            }
            if (code.match(/(\|\|)/g) === null) {
                next('Gebruik ||.');
                return;
            }
            try {
                eval(code);
                if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben waar') {
                    next(null, 'Ik ben waar');
                } else {
                    next('Ik ben niet waar');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var else1 = {
        title: 'If Else',
        task: 'Wat gaat resulaat zijn? Test of je gelijk hebt.',
        templateurl: 'views/ifelse/else1.html',
        code: 'var x = 10;\nvar resultaat;\nif(x > 2 * 2)\n{\n\tresultaat = \'Ik ben groter dan 2 * 2\'\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 2 * 2\'\n}',
        validate: function validateCode(code, next) {
            try {
                eval(code);
                if (typeof resultaat !== 'undefined' && typeof resultaat === 'string') {
                    next(null, resultaat);
                } else {
                    next('Oei oei, de code is kapot.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var else2 = {
        title: 'If Else',
        task: 'Schrijf code zodat wanneer fouten gelijk is aan 0 resultaat \'Alles juist\' wordt en anders resultaat \'Iets fout\' wordt.',
        templateurl: 'views/ifelse/else2.html',
        code: 'var fouten = 0;\nvar resultaat = \'Ik moet nog beginnen\';\nif()\n{\n\tresultaat = \'Alles juist\';\n}\nelse\n{\n\tresultaat = \'Iets fout\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(fouten===0|fouten\s===0|fouten===\s0|fouten\s===\s0)/g) === null) {
                next('Controleer of fouten gelijk is aan 0 (===).');
                return;
            }
            try {
                eval(code);
                if (typeof fouten === 'number' && resultaat === 'Alles juist') {
                    next(null, 'resultaat is ' + resultaat);
                } else {
                    next('Controleer of fouten gelijk is aan 0 (===).');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var elseif1 = {
        title: 'Else If',
        task: 'Begrijp de code en test ze.',
        templateurl: 'views/ifelse/elseif1.html',
        code: 'var x = 5;\nvar resultaat;\nif ( x > 3 * 2 )\n{\n\tresultaat = \'Ik ben groter dan 3 * 2\';\n}\nelse if ( x > 2 * 2 )\n{\n\tresultaat = \'Ik ben groter dan 2 * 2\';\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 2 * 2\';\n}',
        validate: function validateCode(code, next) {
            try {
                eval(code);
                if (typeof resultaat === 'string') {
                    next(null, resultaat);
                } else {
                    next('Oei oei, de code is kapot.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var elseif2 = {
        title: 'Else If',
        task: 'Schrijf code tussen de if haakjes zodat het resultaat \'Ik ben kleiner of gelijk aan 4\' is.',
        templateurl: 'views/ifelse/elseif2.html',
        code: 'var x = 4;\nvar resultaat;\nif ( )\n{\n\tresultaat = \'Ik ben groter dan 7\';\n}\nelse if ( )\n{\n\tresultaat = \'Ik ben groter dan 5\';\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 4\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if\((.{3,})\)|if\s\((.{3,})\))/g) === null) {
                next('Schrijf code tussen de if haakjes.');
                return;
            }
            try {
                eval(code);
                if (typeof resultaat === 'string' && resultaat === 'Ik ben kleiner of gelijk aan 4') {
                    next(null, resultaat);
                } else {
                    next(resultaat);
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var elseif3 = {
        title: 'If',
        task: 'Schrijf code tussen de if haakjes zodat het resultaat \'Ik ben groter dan 5\' is.',
        templateurl: 'views/ifelse/elseif3.html',
        code: 'var x = 6;\nvar resultaat;\nif ( )\n{\n\tresultaat = \'Ik ben groter dan 7\';\n}\nelse if ( )\n{\n\tresultaat = \'Ik ben groter dan 5\';\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 4\';\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if\((.{3,})\)|if\s\((.{3,})\))/g) === null) {
                next('Schrijf code tussen de if haakjes.');
                return;
            }
            try {
                eval(code);
                if (typeof resultaat === 'string' && resultaat === 'Ik ben groter dan 5') {
                    next(null, resultaat);
                } else {
                    next(resultaat);
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    function ifelseQuestions() {
        function getQuestion(question) {
            if (question === 1) {
                return if1;
            } else if (question === 2) {
                return if2;
            } else if (question === 3) {
                return if3;
            } else if (question === 4) {
                return if4;
            } else if (question === 5) {
                return if5;
            } else if (question === 6) {
                return if6;
            } else if (question === 7) {
                return else1;
            } else if (question === 8) {
                return else2;
            } else if (question === 9) {
                return elseif1;
            } else if (question === 10) {
                return elseif2;
            } else if (question === 11) {
                return elseif3;
            }
            return null;
        }
        return {
            getQuestion: getQuestion
        };
    }

    angular.module('coderDojoApp')
        .factory('ifelseQuestions', [ifelseQuestions]);
})();