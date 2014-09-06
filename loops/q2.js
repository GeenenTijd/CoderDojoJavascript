include('loops.q2', function () {

	var description = '<p>Eventjes uitleggen wat de code doet. We maken een variabele x die 0 is en een variabele tekst die A is. Nu komen we aan de while lus.<ul><li>0 is kleiner dan 3, er wordt een A toegevoegd en x wordt 1</li><li>1 is kleiner dan 3, er wordt een A toegevoegd en x wordt 2</li><li>2 is kleiner dan 3, er wordt een A toegevoegd en x wordt 3</li><li>3 is niet kleiner dan 3 de code stopt.</li></ul></p>';

	function validate(code, next) {

		try {
			var result = eval(code);
			if (typeof tekst === 'string' && tekst === 'AAA') {
				next(null, 'tekst is ' + tekst);
			} else if (typeof tekst === 'string') {
				next('tekst is ' + tekst);
			} else {
				next('Oei oei, er ging iets mis.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'While',
		description: description,
		task: 'Verander de code zodat tekst AAA wordt.',
		validate: validate,
		clearCode: false
	};
});