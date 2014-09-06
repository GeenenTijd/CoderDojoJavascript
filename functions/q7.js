include('functions.q7', function () {

	var description = '<p>Hiernaast zie je een functie met twee parameters. Parameters worden gesplitst met een komma. Je kan de functie als volgt oproepen <code>som(2,2)</code></p>';

	function validate(code, next) {

		if (code.match(/(som\(|som\s\()/g) === null) {
			next('Roep de methode som op.');
			return;
		}

		try {
			eval(code);
			if (typeof uitkomst === 'number' && uitkomst === 10) {
				next(null, 'uitkomst is ' + uitkomst);
			} else {
				next('Zorg dat het resultaat van de functie som 10 is.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Functies',
		description: description,
		task: 'Roep de functie som op met twee parameters zodat het resultaat 10 is. Stop het resultaat in de variabele uitkomst.',
		validate: validate,
		clearCode: true,
		code: 'var som = function (getal1, getal2) {\n\treturn getal1 + getal2;\n}\n\nvar uitkomst ='
	};
});