include('ifelse.q9', function () {

	var description = '<ul><li><code>></code> groter dan</li><li><code><</code> kleiner dan</li><li><code>>=</code> groter dan of gelijk aan</li><li><code><=</code> kleiner dan of gelijk aan</li><li><code>===</code> gelijk aan</li><li><code>!==</code> niet gelijk aan</li></ul><ul><li><code>10 > 5 && 5 > 3</code> waar</li><li><code>10 < 5 && 5 > 3</code> niet waar</li><li><code>10 < 5 || 5 > 3</code> waar</li><li><code>10 < 5 || 5 < 3</code> niet waar</li></ul>';

	function validate(code, next) {
		if (code.match(/(if\((.{3,})\))/g) === null) {
			next('Schrijf code tussen de if haakjes.');
			return;
		}

		if (code.match(/(\&\&)/g) === null) {
			next('Gebruik &&.');
			return;
		}

		if (code.match(/(\|\|)/g) === null) {
			next('Gebruik ||.');
			return;
		}

		try {
			eval(code);
			if (typeof resultaat === 'string') {
				next(null, resultaat);
			} else {
				next('Oei oei, de code is kapot.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If Else If Else',
		description: description,
		task: 'Schrijf code tussen de if haakjes zodat het resultaat \'Ik ben kleiner of gelijk aan 2 * 2\' is. Gebruik zowel || als &&.',
		validate: validate,
		clearCode: true,
		code: 'var x = 10;\nvar resultaat;\nif ( )\n{\n\tresultaat = \'Ik ben groter dan 3 * 2\';\n}\nelse if ( )\n{\n\tresultaat = \'Ik ben groter dan 2 * 2\';\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 2 * 2\';\n}'
	};
});