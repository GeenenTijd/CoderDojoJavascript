(function variablesq() {

    var intro1 = {
        title: 'Getallen',
        task: 'Tel twee getallen op.',
        templateurl: 'views/variables/intro1.html',
        validate: function (code, next) {
            if (code.match(/([0-9])(\s[+]\s|[+]|\s[+]|[+]\s)([0-9])/g) === null) {
                next('Tel twee getallen bij elkaar op.');
                return;
            }
            try {
                var result = eval(code);
                if (typeof result === 'number') {
                    next(null, result);
                } else {
                    next('Tel twee getallen bij elkaar op.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var intro2 = {
        title: 'Tekst',
        task: 'Schrijf je naam als een string.',
        templateurl: 'views/variables/intro2.html',
        validate: function validateCode(code, next) {
            if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
                next('Schrijf je naam tussen \'\'.');
                return;
            }
            try {
                var result = eval(code);
                if (typeof result === 'string' && result.length > 0) {
                    next(null, result);
                } else {
                    next('Zet je naam tussen \' \' tekens.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var intro3 = {
        title: 'Tekst',
        task: 'Vraag de lengte van je naam op.',
        templateurl: 'views/variables/intro3.html',
        validate: function validateCode(code, next) {
            if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
                next('Schrijf je naam tussen \'\' tekens. Gebruik .length om de lengte op te vragen.');
                return;
            }
            try {
                var result = eval(code);
                if (typeof result === 'number' && result > 0) {
                    next(null, result);
                } else {
                    next('Schrijf je naam tussen \' \' tekens. Gebruik .length om de lengte op te vragen.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var boolean1 = {
        title: 'Boolean',
        task: 'Je weet al hoe je de lengte van je naam moet opvragen, laat ons nu controleren of je naam langer is dan 6.',
        templateurl: 'views/variables/boolean1.html',
        validate: function validateCode(code, next) {
            if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
                next('Schrijf je naam tussen aanhalingstekens, neem hier de lengte van (.length) en kijk of het langer is dan 6.');
                return;
            }
            if (code.match(/(>6|> 6)/g) === null) {
                next('Kijk of de lengte groter is dan 6 ( gebruik > ).');
                return;
            }
            try {
                var result = eval(code);
                if (typeof result === 'boolean') {
					next(null, result ? 'false (niet waar)' : 'true (waar)');
                } else {
                    next('Is je naam langer dan 6 tekens. ( gebruik > )');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var boolean2 = {
        title: 'Boolean',
        task: 'Controleer of 7 * 3 groter of gelijk is aan 20.',
        templateurl: 'views/variables/boolean2.html',
        validate: function validateCode(code, next) {
            if (code.match(/(7*3|7 *3|7* 3|7 * 3)/g) === null) {
                next('Controleer of 7 * 3 groter of gelijk is aan 20.');
                return;
            }
            if (code.match(/(>=20|>= 20)/g) === null) {
                next('Controleer of 7 * 3 groter of gelijk is ( >= ) aan 20.');
                return;
            }
            try {
                var result = eval(code);
                if (typeof result === 'boolean' && result) {
                    next(null, result ? 'false (niet waar)' : 'true (waar)');
                } else {
                    next('Controleer of 7 * 3 groter of gelijk is ( >= ) aan 20.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var boolean3 = {
        title: 'Boolean',
        task: 'Controleer of \'CoderDojo\' 6 tekens heeft.',
        templateurl: 'views/variables/boolean3.html',
        code: '\'CoderDojo\'',
        validate: function validateCode(code, next) {
            if (code.match(/(\'CoderDojo\'.length)/g) === null) {
                next('Vraag de lengte van \'CoderDojo\' ( .length ) op.');
                return;
            }
            if (code.match(/(===6|=== 6)/g) === null) {
                next('Kijk of de lengte gelijk is aan 6 ( gebruik === ).');
                return;
            }
            try {
                var result = eval(code);
                if (typeof result === 'boolean') {
                    next(null, result ? 'false (niet waar)' : 'true (waar)');
                } else {
                    next('Kijk of de lengte gelijk is aan 6 ( gebruik === ).');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var var1 = {
        title: 'Variabele',
        task: 'Maak een variabel mijnNaam met jou naam in.',
        templateurl: 'views/variables/var1.html',
        validate: function validateCode(code, next) {
            if (code.match(/(var mijnNaam)/g) === null) {
                next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
                return;
            }
            if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
                next('Schrijf je naam tussen \'\'.');
                return;
            }
            try {
                eval(code);
                if (typeof mijnNaam === 'string') {
                    next(null, 'mijnNaam is ' + mijnNaam);
                } else {
                    next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var var2 = {
        title: 'Variabele',
        task: 'Maak een variabele tekens met de lengte van mijnNaam.',
        templateurl: 'views/variables/var2.html',
        code: 'var mijnNaam = \'CoderDojo\';\n',
        validate: function validateCode(code, next) {
            if (code.match(/(var mijnNaam)/g) === null) {
                next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
                return;
            }
            if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
                next('Schrijf je naam tussen \'\'.');
                return;
            }
            if (code.match(/(var tekens =|var tekens=)/g) === null) {
                next('Maak een variabele aan met de naam tekens ( var tekens ).');
                return;
            }
            if (code.match(/(mijnNaam.length)/g) === null) {
                next('Steek de lengte van mijnNaam in de variabele tekens ( mijnNaam.length ).');
                return;
            }
            try {
                eval(code);
                if (typeof mijnNaam === 'string' && typeof tekens === 'number' && tekens === mijnNaam.length) {
                    next(null, 'tekens is ' + tekens);
                } else {
                    next('Maak een variabele met de naam tekens waar we het aantal tekens van mijnNaam insteken.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var var3 = {
        title: 'Variabele',
        task: 'Maak een variabele uitkomst die getal + 2 is.',
        code: 'var getal = 43;\n\n',
        templateurl: 'views/variables/var3.html',
        validate: function validateCode(code, next) {
            if (code.match(/(var uitkomst)/g) === null) {
                next('Maak een variabele aan met de naam uitkomst ( var uitkomst ).');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number' && typeof getal === 'number' && uitkomst === getal + 2) {
                    next(null, 'uitkomst is ' + uitkomst);
                } else if (typeof uitkomst !== 'number') {
                    next('uitkomst is geen getal, zorg dat uitkomst gelijk is aan getal + 2.');
                } else {
                    next('De variabele uitkomst is niet gelijk aan getal + 2.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var var4 = {
        title: 'Variabele',
        task: 'Maak een variabele leeftijd met jou leeftijd. Maak dan een variabele uitkomst die getal + leeftijd is.',
        code: 'var getal = 13;\n\n',
        templateurl: 'views/variables/var3.html',
        validate: function validateCode(code, next) {
            if (code.match(/(var leeftijd)/g) === null) {
                next('Maak een variabele aan met de naam leeftijd ( var leeftijd ).');
                return;
            }
            if (code.match(/(var uitkomst)/g) === null) {
                next('Maak een variabele aan met de naam uitkomst ( var uitkomst ).');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number' && typeof getal === 'number' && typeof leeftijd === 'number' && uitkomst === getal + leeftijd) {
                    next(null, 'uitkomst is ' + uitkomst);
                } else if (typeof leeftijd !== 'number') {
                    next('leeftijd is geen getal.');
                } else if (typeof uitkomst !== 'number') {
                    next('uitkomst is geen getal, zorg dat uitkomst gelijk is aan getal + leeftijd.');
                } else {
                    next('De variabele uitkomst is niet gelijk aan getal + leeftijd.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var var5 = {
        title: 'Variabele',
        task: 'Maak een variabele mijnNaam met jou naam. Maak een variabele leeftijd met jou leeftijd. Steek in de variabele isGroter of de lengte van mijnNaam groter is dan leeftijd.',
        templateurl: 'views/variables/var4.html',
        validate: function validateCode(code, next) {
            if (code.match(/(var mijnNaam)/g) === null) {
                next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
                return;
            }
            if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
                next('Schrijf je naam tussen \' \'.');
                return;
            }
            if (code.match(/(var leeftijd)/g) === null) {
                next('Maak een variabele aan met de naam leeftijd ( var leeftijd ).');
                return;
            }
            if (code.match(/(var isGroter)/g) === null) {
                next('Maak een variabele aan met de naam isGroter ( var isGroter ).');
                return;
            }
            if (code.match(/(mijnNaam.length)/g) === null) {
                next('Kijk of de lengte van mijnNaam ( mijnNaam.length ) groter is dan leeftijd.');
                return;
            }
            try {
                eval(code);
                if (typeof mijnNaam === 'string' && typeof leeftijd === 'number' && typeof isGroter === 'boolean' && isGroter === mijnNaam.length > leeftijd) {
                    next(null, 'isGroter is ' + isGroter);
                } else if (typeof leeftijd !== 'number') {
                    next('leeftijd is geen getal.');
                } else {
                    next('Maak een variabele mijnNaam met jou naam. Maak een variabele leeftijd met jou leeftijd. Maak een variabele isGroter die kijkt of de lengte van mijnNaam groter is dan leeftijd.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    function variablesQuestions() {
        function getQuestion(question) {
            if (question === 1) {
                return intro1;
            } else if (question === 2) {
                return intro2;
            } else if (question === 3) {
                return intro3;
            } else if (question === 4) {
                return boolean1;
            } else if (question === 5) {
                return boolean2;
            } else if (question === 6) {
                return boolean3;
            } else if (question === 7) {
                return var1;
            } else if (question === 8) {
                return var2;
            } else if (question === 9) {
                return var3;
            } else if (question === 10) {
                return var4;
            } else if (question === 11) {
                return var5;
            }
            return null;
        }
        return {
            getQuestion: getQuestion
        };
    }

    angular.module('coderDojoApp')
        .factory('variablesQuestions', [variablesQuestions]);
})();