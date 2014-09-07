include('vars.q10', function () {

	var description = '<p>Nog even verder oefenen met variabelen..</p><ul><li><code>var naam = \'Glenn\';</code></li><li><code>var getal = 25;</code></li><li><code>var isCool = true;</code></li></ul>';

	function validate(code, next) {

        if (code.match(/(var leeftijd)/g) === null) {
			next('Maak een variabele aan met de naam leeftijd ( var leeftijd ).');
			return;
		}
        
		if (code.match(/(var uitkomst)/g) === null) {
			next('Maak een variabele aan met de naam uitkomst ( var uitkomst ).');
			return;
		}
        
		try {
			eval(code);
			if (typeof uitkomst === 'number' && typeof getal === 'number' && typeof leeftijd === 'number' && uitkomst === getal + leeftijd) {
				next(null, 'uitkomst is ' + uitkomst);
			} else if (typeof leeftijd !== 'number') {
                next('leeftijd is geen getal.');
            } else if (typeof uitkomst !== 'number') {
                next('uitkomst is geen getal, zorg dat uitkomst gelijk is aan getal + leeftijd.');
            } else {
				next('De variabele uitkomst is niet gelijk aan getal + leeftijd.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Variabele',
		description: description,
		task: 'Maak een variabele leeftijd met jou leeftijd. Maak dan een variabele uitkomst die getal + leeftijd is.',
		validate: validate,
		clearCode: true,
        code: 'var getal = 13;\n\n' 
	};
});