include('questions.boolean3', function () {

    'use strict';

    var description = '<p>Om te kijken of twee objecten gelijk zijn gebruiken we <code>===</code>, om te kijken of twee objecten niet gelijk zijn gebruiken we <code>!==</code>.</p><ul>Enkele voorbeelden:<li><code>2 === 5</code> (<code>false</code>)</li><li><code>8 === 5 + 3</code> (<code>true</code>)</li><li><code>2 * 2 !== 4</code>(<code>false</code>)</li><li><code>2 + 1 !== 2</code> (<code>true</code>)</li></ul>';

    function validate(code, next) {

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
            next('Schrijf een woord tussen aanhalingstekens, neem hier de lengte van (.length) zodat het is gelijk aan 6.');
            return;
        }

        if (code.match(/(===6|=== 6)/g) === null) {
            next('Kijk of de lengte gelijk is aan 6 ( gebruik === ).');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'boolean') {
                next(null, result);
            } else {
                next('Schrijf een woord met 6 tekens. ( gebruik === )');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Boolean',
        description: description,
        task: 'Controleer of je naam 6 tekens heeft.',
        validate: validate,
        clearCode: false
    };
});