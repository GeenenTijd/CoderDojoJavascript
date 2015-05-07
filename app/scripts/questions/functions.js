(function functionsq() {

    var call1 = {
        title: 'Functies',
        task: 'Lees de uitleg en ga verder.',
        templateurl: 'views/functions/call1.html',

        code: 'function functieNaam(parameter1, parameter2, parameter3) {\n\t// Ik doe dingen.\n\t// Ik doe nog meer dingen.\n\t// Ik doe heel veel dingen.\n}\nvar uitkomst = functieNaam(1, 2, 3);',

        validate: function validateCode(code, next) {
            next(null, 'Ga verder');
        }
    };

    var call2 = {
        title: 'Functies',
        task: 'Hoeveel gaat uitkomst zijn? Test de code.',
        templateurl: 'views/functions/call2.html',
        code: 'function plusTwee (getal) {\n\treturn getal + 2;\n}\nvar uitkomst = plusTwee(2);',
        validate: function validateCode(code, next) {

            if (code.match(/var uitkomst/g) === null) {
                next('Maak een variabele uitkomst die het resultaat van de functie plusTwee opslaat.');
                return;
            }

            if (code.match(/plusTwee/g).length < 2) {
                next('Maak een variabele uitkomst die het resultaat van de functie plusTwee opslaat.');
                return;
            }

            try {
                eval(code);
                if (typeof uitkomst === 'number') {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('De variabele uitkomst moet een getal zijn.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var call3 = {
        title: 'Functies',
        task: 'Verander de code zodat uitkomst 6 wordt.',
        templateurl: 'views/functions/call3.html',
        code: 'function plusTwee (getal) {\n\treturn getal + 2;\n\t// Hier kom ik nooit\n}\nvar uitkomst = plusTwee(2);',
        validate: function validateCode(code, next) {
            if (code.match(/var uitkomst/g) === null) {
                next('Maak een variabele uitkomst die het resultaat van de functie plusTwee opslaat.');
                return;
            }
            if (code.match(/plusTwee/g).length < 2) {
                next('Maak een variabele uitkomst die het resultaat van de functie plusTwee opslaat.');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number' && uitkomst === 6) {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('De variabele uitkomst moet 6 zijn.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var call4 = {
        title: 'Functies',
        task: 'Roep de functie tweeMaal op en stop het resultaat in een variabele uitkomst.',
        templateurl: 'views/functions/call4.html',
        code: 'function tweeMaal (getal) {\n\treturn getal * 2;\n}\n',
        validate: function validateCode(code, next) {
            if (code.match(/(var uitkomst)/g) === null) {
                next('Maak een variabele uitkomst die het resultaat van de functie tweeMaal opslaat.');
                return;
            }
            if (code.match(/tweeMaal/g).length < 2) {
                next('Maak een variabele uitkomst die het resultaat van de functie tweeMaal opslaat.');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number') {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('Maak een variabele uitkomst die het resultaat van de functie tweeMaal opslaat.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var call5 = {
        title: 'Functies',
        task: 'Roep de functie mijnNaam op en stop het resultaat in een variabele uitkomst.',
        templateurl: 'views/functions/call5.html',
        code: 'function mijnNaam() {\n\treturn \'CoderDojo\';\n}\n',
        validate: function validateCode(code, next) {
            if (code.match(/(var uitkomst)/g) === null) {
                next('Maak een variabele uitkomst die het resultaat van de functie mijnNaam opslaat.');
                return;
            }
            if (code.match(/mijnNaam/g).length < 2) {
                next('Maak een variabele uitkomst die het resultaat van de functie mijnNaam opslaat.');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'string' && uitkomst === 'CoderDojo') {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('Maak een variabele uitkomst die het resultaat van de functie mijnNaam opslaat.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var write1 = {
        title: 'Functies',
        task: 'Laat de functie mijnLeeftijd jou leeftijd teruggeven.',
        templateurl: 'views/functions/write1.html',
        code: 'function mijnLeeftijd () {\n\t\n}\n\nvar leeftijd = mijnLeeftijd();',
        validate: function validateCode(code, next) {
            if (code.match(/(return)/g) === null) {
                next('Gebruik return om aan te geven wat de functie teruggeeft.');
                return;
            }
            try {
                eval(code);
                if (typeof leeftijd === 'number') {
                    next(null, 'leeftijd is ' + leeftijd);
                } else {
                    next('Gebruik return om aan te geven wat de functie teruggeeft.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var write2 = {
        title: 'Functies',
        task: 'Laat de functie mijnNaam jou naam teruggeven.',
        templateurl: 'views/functions/write2.html',
        code: 'function mijnNaam () {\n\t\n}\n\nvar naam = mijnNaam();',
        validate: function validateCode(code, next) {
            if (code.match(/(return)/g) === null) {
                next('Gebruik return om aan te geven wat de functie teruggeeft.');
                return;
            }
            try {
                eval(code);
                if (typeof naam === 'string') {
                    next(null, 'naam is ' + naam);
                } else {
                    next('Gebruik return om aan te geven wat de functie teruggeeft.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var write3 = {
        title: 'Functies',
        task: 'Roep de methode tweeMaal aan vanuit tweeMaalTwee.',
        templateurl: 'views/functions/write3.html',
        code: 'function tweeMaal (getal) {\n\treturn getal * 2;\n}\n\nfunction tweeMaalTwee () {\n\t\n}\n\nvar uitkomst = tweeMaalTwee();',
        validate: function validateCode(code, next) {
            if (code.match(/tweeMaal/g).length < 4) {
                next('Roep de methode tweeMaal aan vanuit tweeMaalTwee en return het resultaat.');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number' && uitkomst === 4) {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('Roep de methode tweeMaal aan vanuit tweeMaalTwee zodat de uitkomst 2 maal 2 is.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var write4 = {
        title: 'Functies',
        task: 'Maak een variabele uitkomst die de som is van de functies deling en verschil.',
        templateurl: 'views/functions/write4.html',
        code: 'function verschil () {\n\treturn 19 - 12;\n}\n\nfunction deling () {\n\treturn 54 / 6;\n}\n\n',
        validate: function validateCode(code, next) {
            if (code.match(/(var uitkomst)/g) === null) {
                next('Maak een variabele uitkomst.');
                return;
            }
            if (code.match(/deling/g).length < 2) {
                next('Tel het resultaat van de functie deling op bij het resultaat van de functie verschil.');
                return;
            }
            if (code.match(/verschil/g).length < 2) {
                next('Tel het resultaat van de functie deling op bij het resultaat van de functie verschil.');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number' && uitkomst === 16) {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('Maak een variabele uitkomst die de som is van de functies deling en verschil.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var practice1 = {
        title: 'Functies',
        task: 'Vul de functie benIkVolwassen aan zodat wanneer de leeftijd groter of gelijk is aan 18 de tekst \'Ik ben volwassen\' wordt teruggestuurd, anders stuur je de tekst \'Ik moet nog groeien\' terug.',
        templateurl: 'views/functions/practice1.html',
        code: 'function benIkVolwassen(leeftijd) {\n\t\n}',
        validate: function validateCode(code, next) {
            if (code.match(/(if)/g) === null) {
                next('Gebruik if( ) { } else { }');
                return;
            }
            if (code.match(/(else)/g) === null) {
                next('Gebruik if( ) { } else { }');
                return;
            }
            if (code.match(/(Ik ben volwassen)/g) === null) {
                next('Stuur Ik ben volwassen terug als leeftijd groter of gelijk is aan 18.');
                return;
            }
            if (code.match(/(Ik moet nog groeien)/g) === null) {
                next('Stuur Ik moet nog groeien terug als de leeftijd kleiner is dan 18.');
                return;
            }
            if (code.match(/(return)/g) === null) {
                next('Gebruik return om het resultaat van de functie terug te geven.');
                return;
            }
            try {
                eval(code);
                if (benIkVolwassen(5) === 'Ik moet nog groeien' && benIkVolwassen(18) === 'Ik ben volwassen') {
                    next(null, 'uitkomst van benIkVolwassen(18) is ' + benIkVolwassen(18));
                } else {
                    next('Vul de functie benIkVolwassen aan zodat wanneer de leeftijd groter of gelijk is aan 18 de tekst \'Ik ben volwaseen\' wordt teruggestuurd, anders stuur je de tekst \'Ik moet nog groeien\' terug.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    var practice2 = {
        title: 'Functies',
        task: 'Roep de functie som op met twee parameters zodat het resultaat 10 is. Stop het resultaat in de variabele uitkomst.',
        templateurl: 'views/functions/practice2.html',
        code: 'function som (getal1, getal2) {\n\treturn getal1 + getal2;\n}\n\nvar uitkomst =',
        validate: function validateCode(code, next) {
            if (code.match(/(som\(|som\s\()/g) === null) {
                next('Roep de methode som op.');
                return;
            }
            try {
                eval(code);
                if (typeof uitkomst === 'number' && uitkomst === 10) {
                    next(null, 'uitkomst is ' + uitkomst);
                } else {
                    next('Zorg dat het resultaat van de functie som 10 is.');
                }
            } catch (e) {
                next(e.message);
            }
        }
    };

    function functionsQuestions() {
        function getQuestion(question) {
            if (question === 1) {
                return call1;
            } else if (question === 2) {
                return call2;
            } else if (question === 3) {
                return call3;
            } else if (question === 4) {
                return call4;
            } else if (question === 5) {
                return call5;
            } else if (question === 6) {
                return write1;
            } else if (question === 7) {
                return write2;
            } else if (question === 8) {
                return write3;
            } else if (question === 9) {
                return write4;
            } else if (question === 10) {
                return practice1;
            } else if (question === 11) {
                return practice2;
            }
            return null;
        }
        return {
            getQuestion: getQuestion
        };
    }

    angular.module('coderDojoApp')
        .factory('functionsQuestions', [functionsQuestions]);
})();