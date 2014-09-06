include('functions.q6', function () {

	var description = '<p>Gebruik je kennis van If Else om het juiste resultaat terug te geven.</p>';

	function validate(code, next) {

		if (code.match(/(if)/g) === null) {
			next('Gebruik if( ) { } else { }');
			return;
		}

		if (code.match(/(else)/g) === null) {
			next('Gebruik if( ) { } else { }');
			return;
		}

		if (code.match(/(\'Ik ben volwassen\')/g) === null) {
			next('Stuur Ik ben volwassen terug als leeftijd groter of gelijk is aan 18.');
			return;
		}

		if (code.match(/(\'Ik moet nog groeien\')/g) === null) {
			next('Stuur Ik moet nog groeien terug als de leeftijd kleiner is dan 18.');
			return;
		}

		if (code.match(/(return)/g) === null) {
			next('Gebruik return om het resultaat van de functie terug te geven.');
			return;
		}

		try {
			eval(code);
			if (benIkVolwassen(5) === 'Ik moet nog groeien' && benIkVolwassen(18) === 'Ik ben volwassen') {
				next(null, 'uitkomst van benIkVolwassen(18) is ' + benIkVolwassen(18));
			} else {
				next('Vul de functie benIkVolwassen aan zodat wanneer de leeftijd groter of gelijk is aan 18 de tekst \'Ik ben volwaseen\' wordt teruggestuurd, anders stuur je de tekst \'Ik moet nog groeien\' terug.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Functies',
		description: description,
		task: 'Vul de functie benIkVolwassen aan zodat wanneer de leeftijd groter of gelijk is aan 18 de tekst \'Ik ben volwassen\' wordt teruggestuurd, anders stuur je de tekst \'Ik moet nog groeien\' terug.',
		validate: validate,
		clearCode: true,
		code: 'var benIkVolwassen = function (leeftijd) {\n\t\n}'
	};
});