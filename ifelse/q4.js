include('ifelse.q4', function () {

	var description = '<p>Schrijf nu zelf een vergelijking die niet waar is.</p><ul><li><code>></code> groter dan</li><li><code><</code> kleiner dan</li><li><code>>=</code> groter dan of gelijk aan</li><li><code><=</code> kleiner dan of gelijk aan</li><li><code>===</code> gelijk aan</li><li><code>!==</code> niet gelijk aan</li></ul>';

	function validate(code, next) {

		if (code.match(/(if\((.{3,})\))/g) === null) {
			next('Schrijf code tussen de if haakjes.');
			return;
		}

		try {
			eval(code);
			if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben niet waar') {
				next(null, 'Ik ben niet waar');
			} else {
				next('Ik ben waar');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If',
		description: description,
		task: 'Schrijf in de if code die niet waar is.',
		validate: validate,
		clearCode: true,
		code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}'
	};
});