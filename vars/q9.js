include('vars.q9', function () {

	var description = '<p>Nu gaan we alles nog een keer herhalen.</p>';

	function validate(code, next) {

		if (code.match(/(var mijnNaam)/g) === null) {
			next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
			return;
		}

		if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
			next('Schrijf je naam tussen \'\'.');
			return;
		}

		if (code.match(/(var leeftijd)/g) === null) {
			next('Maak een variabele aan met de naam leeftijd ( var leeftijd ).');
			return;
		}

		if (code.match(/(var isGroter)/g) === null) {
			next('Maak een variabele aan met de naam isGroter ( var isGroter ).');
			return;
		}

		if (code.match(/(mijnNaam.length)/g) === null) {
			next('Kijk of de lengte van mijnNaam ( mijnNaam.length ) groter is dan leeftijd.');
			return;
		}

		if (code.match(/(>)/g) === null) {
			next('Kijk of de lengte van mijnNaam ( mijnNaam.length ) groter is dan leeftijd.');
			return;
		}

		try {
			eval(code);
			if (typeof mijnNaam === 'string' && typeof leeftijd === 'number' && typeof isGroter === 'boolean') {
				next(null, 'isGroter is ' + isGroter);
			} else {
				next('Maak een variabele mijNaam met jou naam. Maak een variabele leeftijd met jou leeftijd. Maak een variabele isGroter die kijkt of de lengte van mijnNaam groter is dan leeftijd.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Variabele',
		description: description,
		task: 'Maak een variabele mijNaam met jou naam. Maak een variabele leeftijd met jou leeftijd. Maak een variabele isGroter die kijkt of de lengte van mijnNaam groter is dan leeftijd.',
		validate: validate,
		clearCode: true
	};
});