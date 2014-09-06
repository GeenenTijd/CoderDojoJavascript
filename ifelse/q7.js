include('ifelse.q7', function () {

	var description = '<p>Nog eventjes verder oefenen met <code>if () {} else {}</code>.</p>';

	function validate(code, next) {

		if (code.match(/(getal===0|getal\s===0|getal===\s0|getal\s===\s0)/g) === null) {
			next('Controleer of getal gelijk is aan 0.');
			return;
		}

		try {
			eval(code);
			if (typeof getal === 'number' && getal === 1) {
				next(null, 'getal is 1');
			} else {
				next('Oei oei, de code is kapot.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If Else',
		description: description,
		task: 'Schrijf code zodat wanneer getal gelijk is aan 0 getal 1 wordt en anders getal 2 wordt.',
		validate: validate,
		clearCode: true,
		code: 'var getal = 0;\nif()\n{\n\tgetal = 1;\n}\nelse\n{\n\tgetal = 2;\n}'
	};
});