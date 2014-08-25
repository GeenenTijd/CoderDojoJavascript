var variable2Question = (function () {

    var question = '<h2>Variabele</h2><p>We hebben nu een variabele met jou naam. Maak een variabele met de naam tekens op een nieuwe lijn. Steek het aantal tekens van mijnNaam in de variabele tekens met <code>=</code>.</p><ul>Enkele voorbeelden:<li>var naam = \'Glenn\';</li><li>var leeftijd = 25;</li><li>var isCool = true;</li></ul><p>In plaats van <code>\'Glenn\'.length</code> kan ik nu ook <code>mijnNaam.length</code> gebruiken.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/(var mijnNaam)/g) === null) {
            App.showError('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
            return;
        }

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
            App.showError('Schrijf je naam tussen \'\'.');
            return;
        }

        if (code.match(/(var tekens =|var tekens=)/g) === null) {
            App.showError('Maak een variabele aan met de naam tekens ( var tekens ).');
            return;
        }

        if (code.match(/(mijnNaam.length)/g) === null) {
            App.showError('Steek de lengte van mijnNaam in de variabele tekens ( mijnNaam.length ).');
            return;
        }

        try {
            eval(code);
            console.log(mijnNaam);
            if (typeof mijnNaam === 'string' && typeof tekens === 'number' && tekens === mijnNaam.length) {
                App.showCorrect('tekens = ' + tekens);
            } else {
                App.showError('Maak een variabele met de naam tekens waar we het aantal tekens van mijnNaam insteken.');
            }
        } catch (e) {
            App.showError(e.message);
        }
    }

    return {
        question: question,
        validate: validate,
        clearCode: false
    };
})();