var booleanQuestion = (function () {

    'use strict';

    var question = '<h2>Boolean</h2><p>Een boolean is een waarde om aan te geven of iets waar of niet waar is. Een boolean geeft <code>true</code> terug als het waar is en <code>false</code> als het fout is.</p><ul>Enkele voorbeelden:<li><code>2 > 5</code> (<code>false</code>)</li><li><code>8 > 3</code> (<code>true</code>)</li><li><code>2 * 2 > 4</code>(<code>false</code>)</li><li><code>2 + 1 > 2</code> (<code>true</code>)</li></ul><p>Laat ons controleren of je naam langer is dan 6.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
            App.showError('Schrijf je naam tussen aanhalingstekens, neem hier de lengte van (.length) en kijk of het langer is dan 6.');
            return;
        }

        if (code.match(/(>6|> 6)/g) === null) {
            App.showError('Kijk of de lengte groter is dan 6 ( gebruik > ).');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'boolean') {
                App.showCorrect(result);
            } else {
                App.showError('Is je naam langer dan 6 tekens. ( gebruik > )');
            }
        } catch (e) {
            App.showError(e.message);
        }
    }

    return {
        question: question,
        validate: validate
    };
})();