include(function () {

    var description = '<p>Roep nog eens een functie op.</p>';

    function validate(code, next) {

        if (code.match(/(var uitkomst)/g) === null) {
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

    return {
        title: 'Functies',
        description: description,
        task: 'Roep de functie mijnNaam op en stop het resultaat in een variabele uitkomst.',
        validate: validate,
        clearCode: true,
        code: 'function mijnNaam() {\n\treturn \'CoderDojo\';\n}\n'
    };
});