include('questions.name', function () {

    'use strict';

    var description = '<p>Schrijf je naam in aanhalingstekens. Javascript herkent alles binnen aanhalingstekens (\' \') als tekst, dit noemen we een string.</p>';

    function validate(code, next) {

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
            next('Schrijf je naam tussen \'\'.');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'string' && result.length > 0) {
                next(null, result);
            } else {
                next('Zet je naam tussen \'\' tekens.');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Tekst',
        description: description,
        task: 'Schrijf je naam als een string.',
        validate: validate,
        clearCode: true
    };
});