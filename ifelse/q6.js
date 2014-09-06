include('ifelse.q6', function () {

	var description = '<p>Scratch heeft ook het als-dan-anders-blokje. In javascript is dit <code>if(){} else{}</code> met tussen haakjes de code die we controleren of ze waar is.</p><p>if( waar of niet waar)<br/>{<br/>//Ik kom hier als het waar is.<br/>}<br/>else<br/>{<br/>// Ik kom hier als het niet waar is.<br/>}</p>';

	function validate(code, next) {
		try {
			eval(code);
			if (typeof resultaat !== 'undefined' && typeof resultaat === 'string') {
				next(null, resultaat);
			} else {
				next('Oei oei, de code is kapot.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If Else',
		description: description,
		task: 'Wat gaat resulaat zijn? Test of je gelijk hebt.',
		validate: validate,
		clearCode: true,
		code: 'var x = 10;\nvar resultaat;\nif(x > 2 * 2)\n{\n\tresultaat = \'Ik ben groter dan 2 * 2\'\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 2 * 2\'\n}'
	};
});