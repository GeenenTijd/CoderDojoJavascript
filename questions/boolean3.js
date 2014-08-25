var boolean3Question = (function () {

    'use strict';

    var question = '<h2>Boolean</h2><p>Om te kijken of twee objecten gelijk zijn gebruiken we <code>===</code>, om te kijken of twee objecten niet gelijk zijn gebruiken we <code>!==</code>.</p><ul>Enkele voorbeelden:<li><code>2 === 5</code> (<code>false</code>)</li><li><code>8 === 5 + 3</code> (<code>true</code>)</li><li><code>2 * 2 !== 4</code>(<code>false</code>)</li><li><code>2 + 1 !== 2</code> (<code>true</code>)</li></ul><p>Controleer of je naam 6 tekens heeft.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
            App.showError('Schrijf een woord tussen aanhalingstekens, neem hier de lengte van (.length) zodat het is gelijk aan 6.');
            return;
        }

        if (code.match(/(===6|=== 6)/g) === null) {
            App.showError('Kijk of de lengte gelijk is aan 6 ( gebruik === ).');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'boolean') {
                App.showCorrect(result);
            } else {
                App.showError('Schrijf een woord met 6 tekens. ( gebruik === )');
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