var boolean2Question = (function () {

    'use strict';

    var question = '<h2>Boolean</h2><p>Je hebt groter dan en kleiner dan gezien. Er zijn nog meer mogelijkheden. Groter dan of gelijk aan <code>>=</code> en kleiner dan of gelijk aan <code><=</code>.</p><ul>Enkele voorbeelden:<li><code>2 >= 5</code> (<code>false</code>)</li><li><code>8 >= 5 + 3</code> (<code>true</code>)</li><li><code>2 * 2 <= 4</code>(<code>true</code>)</li><li><code>2 + 1 <= 2</code> (<code>false</code>)</li></ul><p>Controleer of de lengte van je naam groter of gelijk is aan 6.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
            App.showError('Schrijf je naam tussen aanhalingstekens, neem hier de lengte van (.length) en kijk of het langer is of gelijk aan 6.');
            return;
        }

        if (code.match(/(>=6|>= 6)/g) === null) {
            App.showError('Kijk of de lengte groter is dan of gelijk aan 6 ( gebruik >= ).');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'boolean') {
                App.showCorrect(result);
            } else {
                App.showError('Is je naam langer of gelijk aan 6 tekens. ( gebruik >= )');
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