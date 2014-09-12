include(function () {

    var description = '<p>Gebruik return om iets terug te geven vanuit een functie.</p>';

    function validate(code, next) {

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

    return {
        title: 'Functies',
        description: description,
        task: 'Laat de functie mijnNaam jou naam teruggeven.',
        validate: validate,
        clearCode: true,
        code: 'function mijnNaam () {\n\t\n}\n\nvar naam = mijnNaam();'
    };
});