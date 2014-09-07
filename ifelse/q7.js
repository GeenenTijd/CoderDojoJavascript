include('ifelse.q7', function () {

	var description = '<p>Nog eventjes verder oefenen met if(){}else{}.</p>';

	function validate(code, next) {

		if (code.match(/(fouten===0|fouten\s===0|fouten===\s0|fouten\s===\s0)/g) === null) {
			next('Controleer of fouten gelijk is aan 0 (===).');
			return;
		}

		try {
			eval(code);
			if (typeof fouten === 'number' && resultaat === 'Alles juist') {
				next(null, 'resultaat is ' + resultaat);
			} else {
				next('Controleer of fouten gelijk is aan 0 (===).');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If Else',
		description: description,
		task: 'Schrijf code zodat wanneer fouten gelijk is aan 0 resultaat \'Alles juist\' wordt en anders resultaat \'Iets fout\' wordt.',
		validate: validate,
		clearCode: true,
		code: 'var fouten = 0;\nvar resultaat = \'Ik moet nog beginnen\';\nif()\n{\n\tresultaat = \'Alles juist\';\n}\nelse\n{\n\tresultaat = \'Iets fout\';\n}'
	};
});