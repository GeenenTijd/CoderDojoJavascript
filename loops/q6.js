include('loops.q6', function () {
	'use strict';

	var description = '<p>Getallen gebruiken in javascript is heel simpel, je moet ze gewoon intypen.</p><ul>Enkele voorbeelden:<li><code>2 + 5</code> (optellen)</li><li><code>8 - 3</code> (aftrekken)</li><li><code>2 * 2</code> (vermenigvuldigen)</li><li><code>6 / 2</code> (delen)</li></ul>';

	function validate(code, next) {

		if (code.match(/([0-9])(\s[+]\s|[+]|\s[+]|[+]\s)([0-9])/g) === null) {
			next('Tel twee getallen bij elkaar op.');
			return;
		}

		try {
			var result = eval(code);
			if (typeof result === 'number') {
				next(null, result);
			} else {
				next('Tel twee getallen bij elkaar op.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'Getallen',
		description: description,
		task: 'Tel twee getallen op.',
		validate: validate,
		clearCode: true
	};
});