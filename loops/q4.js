include('loops.q4', function () {

	var description = '<p>Eventjes uitleggen wat de code doet. We maken een variabele tekst die A is. Nu komen we aan de for lus.<ul><li>We maken een variabele i die 0 is.</li><li>0 is kleiner dan 3, er wordt een A toegevoegd aan tekst</li><li>Einde van de lus we vermeerderen i met 1.</li><li>1 is kleiner dan 3, er wordt een A toegevoegd aan tekst</li><li>Einde van de lus we vermeerderen i met 1.</li><li>2 is kleiner dan 3, er wordt een A aan tekst</li><li>Einde van de lus we vermeerderen i met 1.</li><li>3 is niet kleiner dan 3 de code stopt.</li></ul></p>';

	function validate(code, next) {

		try {
			var result = eval(code);
			if (typeof tekst === 'string' && tekst === 'AAA') {
				next(null, 'tekst is ' + tekst);
			} else if (typeof tekst === 'string') {
				next('tekst is ' + tekst);
			} else {
				next('Oei oei, er ging iets mis.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'For',
		description: description,
		task: 'Verander de code zodat tekst AAA wordt.',
		validate: validate,
		clearCode: true,
		code: 'var tekst = \'A\';\n\nfor(var i = 0; i < 3; ++i) {\n\ttekst = tekst + \'A\';\n}'
	};
});