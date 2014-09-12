include(function () {

    var description = '<p>Nu we weten hoe we een functie kunnen oproepen gaan we verder kijken hoe we een functie kunnen schrijven. Een functie voert alle code uit tussen de accolades. Wanneer een functie iets wil teruggeven gebruiken we <code>return</code>. Wat we achter het woord <code>return</code> schrijven is het object dat we teruggeven.</p>';

    function validate(code, next) {

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

    return {
        title: 'Functies',
        description: description,
        task: 'Laat de functie mijnLeeftijd jou leeftijd teruggeven.',
        validate: validate,
        clearCode: true,
        code: 'function mijnLeeftijd () {\n\t\n}\n\nvar leeftijd = mijnLeeftijd();'
    };
});