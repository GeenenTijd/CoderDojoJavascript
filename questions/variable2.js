include('questions.variable2', function () {

    var description = '<p>We hebben nu een variabele met jou naam. Maak een variabele met de naam tekens op een nieuwe lijn. Steek het aantal tekens van mijnNaam in de variabele tekens met <code>=</code>.</p><ul>Enkele voorbeelden:<li>var naam = \'Glenn\';</li><li>var leeftijd = 25;</li><li>var isCool = true;</li></ul><p>In plaats van <code>\'Glenn\'.length</code> kan ik nu ook <code>mijnNaam.length</code> gebruiken.</p>';

    function validate(code, next) {

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
                next(null, 'tekens = ' + tekens);
            } else {
                next('Maak een variabele met de naam tekens waar we het aantal tekens van mijnNaam insteken.');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Variabele',
        description: description,
        task: 'Maak een variabele tekens met de lengte van mijnNaam.',
        validate: validate,
        clearCode: false
    };
});