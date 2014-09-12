include(function () {

    var description = '<p>Een functie is het bundelen van enkele instructies voor de computer. Door de instructies te bundelen moeten we niet elke keer de instructies opnieuw schrijven maar kunnen we de functie gebruiken.</p><p>Hiernaast zie je een functie met de naam tweeMaalTwee. Je kan een functie als volgt oproepen <code>tweeMaalTwee()</code>.</p>';

    function validate(code, next) {

        if (code.match(/(var uitkomst)/g) === null) {
            next('Maak een variabele uitkomst die het resultaat van de functie tweeMaalTwee opslaat.');
            return;
        }

        try {
            eval(code);
            if (typeof uitkomst === 'number' && uitkomst === 4) {
                next(null, 'uitkomst is ' + uitkomst);
            } else {
                next('Maak een variabele uitkomst die het resultaat van de functie tweeMaalTwee opslaat.');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Functies',
        description: description,
        task: 'Roep de functie tweeMaalTwee op en stop het resultaat in een variabele uitkomst.',
        validate: validate,
        clearCode: true,
        code: 'function tweeMaalTwee () {\n\treturn 2 * 2;\n}\n'
    };
});