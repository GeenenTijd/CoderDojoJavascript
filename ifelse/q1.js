include('ifelse.q1', function () {

	var description = '<p>We kennen het als-dan-blokje van scratch. In javascript is dit if(){} met tussen haakjes de code die we controleren of ze waar is. Als wat tussen de haakjes staat waar is wordt de code tussen de accolades uitgevoerd.</p><p>if(ikBenWaar)<br/>{<br/>//Ik kom hier<br/>}</p>';

	function validate(code, next) {
		if (code.match(/(var leeftijd =)(\s[0-9]|[0-9])/g) === null) {
			next('Vul je leeftijd in.');
			return;
		}
		try {
			eval(code);
			if (ikBenVolwassen) {
				next(null, 'ikBenVolwassen is waar');
			} else {
				next(null, 'ikBenVolwassen is niet waar');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If',
		description: description,
		task: 'Vul je leeftijd in en test de code.',
		validate: validate,
		clearCode: true,
		code: 'var leeftijd = \nvar ikBenVolwassen = false;\n\nif(leeftijd > 18)\n{\n\tikBenVolwassen = true;\n}'
	};
});