include('loops.q1', function () {

	var description = '<p>Scratch heeft herhaal blokjes, herhalen komt heel veel voor in het programmeren, we willen toch niet hetzelfde elke keer opnieuw typen. We starten met het herhaal-tot-blokje, in javascript is dit <code>while(){}</code>. While wil zeggen dat zolang hetgene dat tussen de haakjes staat waar is de code tussen de accolades wordt uitgevoerd.</p>';

	function validate(code, next) {

		try {
			var result = eval(code);
			if (typeof tekst === 'string') {
				next(null, 'tekst is ' + tekst);
			} else {
				next('Oei oei, er ging iets mis.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'While',
		description: description,
		task: 'Wat denk jij dat tekst gaat zijn? Test de code.',
		validate: validate,
		clearCode: true,
		code: 'var x = 0;\nvar tekst = \'A\';\n\nwhile(x < 3) {\n\ttekst = tekst + \'A\';\n\tx = x + 1;\n}'
	};
});