include('vars.q9', function () {

	var description = '<p>Nog even verder oefenen met variabelen..</p><ul><li><code>var naam = \'Glenn\';</code></li><li><code>var getal = 25;</code></li><li><code>var isCool = true;</code></li></ul>';

	function validate(code, next) {

		if (code.match(/(var uitkomst)/g) === null) {
			next('Maak een variabele aan met de naam uitkomst ( var uitkomst ).');
			return;
		}
		try {
			eval(code);
			if (typeof uitkomst === 'number' && typeof getal === 'number' && uitkomst === getal + 2) {
				next(null, 'uitkomst is ' + uitkomst);
			} else if (typeof uitkomst !== 'number') {
                next('uitkomst is geen getal, zorg dat uitkomst gelijk is aan getal + 2.');
            } else {
				next('De variabele uitkomst is niet gelijk aan getal + 2.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Variabele',
		description: description,
		task: 'Maak een variabele uitkomst die getal + 2 is.',
		validate: validate,
		clearCode: true,
        code: 'var getal = 43;\n\n' 
	};
});