include(function () {

    var description = '<p>Hiernaast zie je een functie met de naam tweeMaal. De functie heeft één parameter (getal). Een parameter is een object dat je moet meegeven aan de functie. In dit geval moet je een getal meegeven, de functie tweeMaal gaat dit getal dan vermenigvuldigen met 2 en het resultaat teruggeven.</p><p>Je kan de methode als volgt oproepen: <code>tweeMaal(5)</code>, 5 is hier de parameter die we meegeven aan de functie.</p>';

    function validate(code, next) {

        if (code.match(/(var uitkomst)/g) === null) {
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

    return {
        title: 'Functies',
        description: description,
        task: 'Roep de functie tweeMaal op en stop het resultaat in een variabele uitkomst.',
        validate: validate,
        clearCode: true,
        code: 'function tweeMaal (getal) {\n\treturn getal * 2;\n}\n'
    };
});