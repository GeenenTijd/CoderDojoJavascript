include('loops.q3', function () {

	var description = '<p>In scratch hebben we het herhaal-10-keer-blokje. Om iets een bepaald aantal keer te herhalen gebruiken we een for lus <code>for(;;){}</code>. De for lus is al ingewikkelder, ze bestaat uit 3 delen gescheiden door <code>;</code>. <ul><li>Het eerste deel is het start gedeelte, wat moet er gebeuren voordat de lus start. Hier maken we een variabele i.</li><li>Het tweede deel is de controle of de lus mag verder doen of niet. Zolang i kleiner is dan 3 doen we verder.</li><li>Het derde deel is wat er moet gebeuren wanneer we aan het einde van de code in de lus komen. Hier tellen we 1 op bij i (++i is hetzelfde als i = i + 1).</li></ul></p>';

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
		title: 'For',
		description: description,
		task: 'Wat denk jij dat tekst gaat zijn? Test de code.',
		validate: validate,
		clearCode: true,
		code: 'var tekst = \'A\';\n\nfor(var i = 0; i < 3; ++i) {\n\ttekst = tekst + \'A\';\n}'
	};
});