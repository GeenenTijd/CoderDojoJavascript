include('ifelse.q3', function () {

	var description = '<p>Schrijf nu zelf een vergelijking die waar is.</p><ul><li><code>></code> groter dan</li><li><code><</code> kleiner dan</li><li><code>>=</code> groter dan of gelijk aan</li><li><code><=</code> kleiner dan of gelijk aan</li><li><code>===</code> gelijk aan</li><li><code>!==</code> niet gelijk aan</li></ul>';

	function validate(code, next) {

		if (code.match(/(if\((.{3,})\))/g) === null) {
			next('Schrijf code tussen de if haakjes.');
			return;
		}

		try {
			eval(code);
			if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben waar') {
				next(null, 'Ik ben waar');
			} else {
				next('Ik ben niet waar');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If',
		description: description,
		task: 'Schrijf tussen de if haakjes code die waar is.',
		validate: validate,
		clearCode: true,
		code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}'
	};
});