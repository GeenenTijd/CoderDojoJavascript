include('functions.q5', function () {

	var description = '<p>Je kan gewoon verder werken met het resultaat van een functie net alsof het een variabele is.</p>';

	function validate(code, next) {

		if (code.match(/(var uitkomst)/g) === null) {
			next('Maak een variabele uitkomst.');
			return;
		}

		if (code.match(/(deling\(\))/g) === null) {
			next('Tel het resultaat van de functie deling op bij het resultaat van de functie verschil.');
			return;
		}

		if (code.match(/(verschil\(\))/g) === null) {
			next('Tel het resultaat van de functie deling op bij het resultaat van de functie verschil.');
			return;
		}

		try {
			eval(code);
			if (typeof uitkomst === 'number' && uitkomst === 16) {
				next(null, 'uitkomst is ' + uitkomst);
			} else {
				next('Maak een variabele uitkomst die de som is van de functies deling en verschil.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Functies',
		description: description,
		task: 'Maak een variabele uitkomst die de som is van de functies deling en verschil.',
		validate: validate,
		clearCode: true,
		code: 'var verschil = function () {\n\treturn 19 - 12;\n}\n\nvar deling = function() {\n\treturn 54 / 6;\n}\n\n'
	};
});