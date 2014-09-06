include('ifelse.q2', function () {

	var description = '<p>We maken een variabele ikBenVolwassen die we op niet waar (false) zetten. Enkel wanneer de variabele leeftijd groter is dan 18 wordt ikBenVolwassen op waar (true) gezet.</p>';

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
				next('Verander de code zodat ikBenVolwassen waar wordt.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If',
		description: description,
		task: 'Verander de code zodat ikBenVolwassen waar wordt.',
		validate: validate,
		clearCode: false
	};
});