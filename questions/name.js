var nameQuestion = (function () {

    'use strict';

    var question = '<h2>Wat is je naam?</h2><p>Schrijf je naam in aanhalingstekens. Javascript herkent alles binnen aanhalingstekens (\' \') als tekst, dit noemen we een string.</p><p>Schrijf je code in het tekstveld hiernaast en druk op de test knop om je code te controleren. Wanneer je code juist is kan je naar de volgende vraag.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
            App.showError('Schrijf je naam tussen \'\'.');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'string' && result.length > 0) {
                App.showCorrect(result);
            } else {
                App.showError('Zet je naam tussen \'\' tekens.');
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