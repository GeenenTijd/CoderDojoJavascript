include('functions.q1', function () {
	'use strict';

	var description = '<p>Hier komt functies stuff</p>';

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
		title: 'Functies',
		description: description,
		task: 'Tel twee getallen op.',
		validate: validate,
		clearCode: true
	};
});