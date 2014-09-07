include('vars.q6', function () {

    'use strict';

    var description = '<p>Om te kijken of twee objecten gelijk zijn gebruiken we <code>===</code>, om te kijken of twee objecten niet gelijk zijn gebruiken we <code>!==</code>.</p><ul>Enkele voorbeelden:<li><code>2 === 5</code> <code class="returns">false</code></li><li><code>8 === 5 + 3</code> <code class="returns">true</code></li><li><code>2 * 2 !== 4</code> <code class="returns">false</code></li><li><code>2 + 1 !== 2</code> <code class="returns">true</code></li></ul>';

    function validate(code, next) {

        if (code.match(/(\'CoderDojo\'.length)/g) === null) {
            next('Vraag de lengte van \'CoderDojo\' ( .length ) op.');
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
                next('Kijk of de lengte gelijk is aan 6 ( gebruik === ).');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Boolean',
        description: description,
        task: 'Controleer of \'CoderDojo\' 6 tekens heeft.',
        validate: validate,
        clearCode: true,
        code: '\'CoderDojo\''
    };
});