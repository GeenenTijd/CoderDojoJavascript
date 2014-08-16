var numberQuestion = (function () {
    'use strict';

    var question = '<h2>Getallen</h2><p>Getallen gebruiken in javascript is heel simpel, je moet ze gewoon intypen.</p><ul>Enkele voorbeelden:<li><code>2 + 5</code> (optellen)</li><li><code>8 - 3</code> (aftrekken)</li><li><code>2 * 2</code> (vermenigvuldigen)</li><li><code>6 / 2</code> (delen)</li></ul><p class="thick">Tel twee getallen op.</p><p>Schrijf je code in het tekstveld hiernaast en druk op de test knop om je code te controleren. Wanneer je code juist is kan je naar de volgende vraag.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/([0-9])(\s[+]\s|[+]|\s[+]|[+]\s)([0-9])/g) === null) {
            App.showError('Tel twee getallen bij elkaar op.');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'number') {
                App.showCorrect(result);
            } else {
                App.showError('Tel twee getallen bij elkaar op.');
            }
        } catch (e) {
            App.showError(e.message);
        }
    }

    return {
        question: question,
        validate: validate,
        clearCode: true
    };
})();