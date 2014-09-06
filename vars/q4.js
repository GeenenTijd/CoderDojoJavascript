include('vars.q4', function () {

	'use strict';

	var description = '<p>Een boolean is een waarde om aan te geven of iets waar of niet waar is. Een boolean geeft <code>true</code> terug als het waar is en <code>false</code> als het fout is.</p><ul>Enkele voorbeelden:<li><code>2 > 5</code> (Uitkomst: false)</li><li><code>8 > 3</code> (Uitkomst: true)</li><li><code>2 * 2 > 4</code>(Uitkomst: false)</li><li><code>2 + 1 > 2</code> (Uitkomst: true)</li></ul>';

	function validate(code, next) {
		if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
			next('Schrijf je naam tussen aanhalingstekens, neem hier de lengte van (.length) en kijk of het langer is dan 6.');
			return;
		}

		if (code.match(/(>6|> 6)/g) === null) {
			next('Kijk of de lengte groter is dan 6 ( gebruik > ).');
			return;
		}

		try {
			var result = eval(code);
			if (typeof result === 'boolean') {
				next(null, result);
			} else {
				next('Is je naam langer dan 6 tekens. ( gebruik > )');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Boolean',
		description: description,
		task: 'Je weet al hoe je de lengte van je naam moet opvragen, laat ons nu controleren of je naam langer is dan 6.',
		validate: validate,
		clearCode: false
	};
});
