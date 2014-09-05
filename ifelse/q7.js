include('ifelse.q7', function () {

	var description = '<p>Nog eventjes verder oefenen met <code>if () {} else {}</code>.</p>';

	function validate(code, next) {

		if (code.match(/(x===0|x\s===0|x===\s0|x\s===\s0)/g) === null) {
			next('Controleer of x gelijk is aan 0.');
			return;
		}

		try {
			eval(code);
			if (typeof x === 'number' && x === 1) {
				next(null, 'x is 1');
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
		task: 'Schrijf code zodat wanneer x gelijk is aan 0 x 1 wordt en anders x 2 wordt.',
		validate: validate,
		clearCode: true,
		code: 'var x = 0;\nif()\n{\n\tx = 1;\n}\nelse\n{\n\tx = 2;\n}'
	};
});