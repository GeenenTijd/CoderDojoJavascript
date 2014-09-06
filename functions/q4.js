include('functions.q4', function () {

	var description = '<p>Je kan een functie ook van in een andere functie aanroepen.</p>';

	function validate(code, next) {

		if (code.match(/(tweeMaal\(\s2\)|tweeMaal\(2\)|tweeMaal\(\s2\s\))/g) === null) {
			next('Roep de methode tweeMaal aan vanuit tweeMaalTwee en return het resultaat.');
			return;
		}

		try {
			eval(code);
			if (typeof uitkomst === 'number' && uitkomst === 4) {
				next(null, 'uitkomst is ' + uitkomst);
			} else {
				next('Roep de methode tweeMaal aan vanuit tweeMaalTwee en return het resultaat.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Functies',
		description: description,
		task: 'Roep de methode tweeMaal aan vanuit tweeMaalTwee.',
		validate: validate,
		clearCode: true,
		code: 'var tweeMaal = function (getal) {\n\treturn getal * 2;\n}\n\nvar tweeMaalTwee = function() {\n\t\n}\n\nvar uitkomst = tweeMaalTwee();'
	};
});