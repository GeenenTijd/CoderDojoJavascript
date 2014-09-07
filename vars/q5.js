include('vars.q5', function () {

    'use strict';

    var description = '<p>Je hebt groter dan en kleiner dan gezien. Er zijn nog meer mogelijkheden. Groter dan of gelijk aan <code>>=</code> en kleiner dan of gelijk aan <code><=</code>.<ul><li><code>2 >= 5</code> <code class="returns">false</code></li><li><code>8 >= 5 + 3</code> <code class="returns">true</code></li><li><code>2 * 2 <= 4</code> <code class="returns">true</code></li><li><code>2 + 1 <= 2</code> <code class="returns">false</code></li></ul></p>';

    function validate(code, next) {

        if (code.match(/(7*3|7 *3|7* 3|7 * 3)/g) === null) {
            next('Controleer of 7 * 3 groter of gelijk is aan 20.');
            return;
        }

        if (code.match(/(>=20|>= 20)/g) === null) {
            next('Controleer of 7 * 3 groter of gelijk is ( >= ) aan 20.');
            return;
        }

        try {
            var result = eval(code);
            if (typeof result === 'boolean' && result) {
                next(null, result);
            } else {
                next('Controleer of 7 * 3 groter of gelijk is ( >= ) aan 20.');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Boolean',
        description: description,
        task: 'Controleer of 7 * 3 groter of gelijk is aan 20.',
        validate: validate,
        clearCode: true
    };
});