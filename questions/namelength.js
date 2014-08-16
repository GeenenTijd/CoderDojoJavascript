var nameLengthQuestion = (function () {

    'use strict';

    var question = '<h2>Lengte van tekst</h2><p>Lengte is <code>length</code> in het Engels. Je kan <code>.length</code> gebruiken op een string om de lengte terug te geven.</p><p>Mijn naam is Glenn, als ik de lengte van mijn naam wil vinden zou ik <code>\'Glenn\'.length</code> gebruiken.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
            App.showError('Schrijf je naam tussen \'\' tekens. Gebruik .length om de lengte op te vragen.');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'number' && result > 0) {
                App.showCorrect(result);
            } else {
                App.showError('Schrijf je naam tussen \'\' tekens. Gebruik .length om de lengte op te vragen.');
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