include('vars.q3', function () {

	'use strict';

	var description = '<p>Lengte is <code>length</code> in het Engels. Je kan <code>.length</code> gebruiken op een string om de lengte terug te geven.</p><p>Mijn naam is Glenn, als ik de lengte van mijn naam wil vinden zou ik <code>\'Glenn\'.length</code> gebruiken.</p>';

	function validate(code, next) {

		if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g) === null) {
			next('Schrijf je naam tussen \'\' tekens. Gebruik .length om de lengte op te vragen.');
			return;
		}

		try {
			var result = eval(code);
			if (typeof result === 'number' && result > 0) {
				next(null, result);
			} else {
				next('Schrijf je naam tussen \'\' tekens. Gebruik .length om de lengte op te vragen.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Lengte van tekst',
		description: description,
		task: 'Vraag de lengte van je naam op.',
		validate: validate,
		clearCode: false
	};
});