include(function () {

    var description = '<ul><li><code>></code> groter dan</li><li><code><</code> kleiner dan</li><li><code>>=</code> groter dan of gelijk aan</li><li><code><=</code> kleiner dan of gelijk aan</li><li><code>===</code> gelijk aan</li><li><code>!==</code> niet gelijk aan</li></ul>';

    function validate(code, next) {
        if (code.match(/(if\((.{3,})\)|if\s\((.{3,})\))/g) === null) {
            next('Schrijf code tussen de if haakjes.');
            return;
        }

        try {
            eval(code);
            if (typeof resultaat === 'string' && resultaat === 'Ik ben kleiner of gelijk aan 4') {
                next(null, resultaat);
            } else {
                next(resultaat);
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Else If',
        description: description,
        task: 'Schrijf code tussen de if haakjes zodat het resultaat \'Ik ben kleiner of gelijk aan 4\' is.',
        validate: validate,
        clearCode: true,
        code: 'var x = 4;\nvar resultaat;\nif ( )\n{\n\tresultaat = \'Ik ben groter dan 7\';\n}\nelse if ( )\n{\n\tresultaat = \'Ik ben groter dan 5\';\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 4\';\n}'
    };
});