include('ifelse.q8', function () {

	var description = '<p>Er bestaat ook nog een <code>else if() {}</code>. Dit gebruiken we om meerdere controles achter elkaar te doen.</p><p>if( 1 )<br/>{<br/>// 1 is waar<br/>}<br/>else if ( 2 )<br/>{<br/> // 2 is waar<br/>}<br/>else<br/>{<br/>1 en 2 zijn niet waar<br/>}</p>';

	function validate(code, next) {
		try {
			eval(code);
			if (typeof resultaat === 'string') {
				next(null, resultaat);
			} else {
				next('Oei oei, de code is kapot.');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If Else If Else',
		description: description,
		task: 'Begrijp de code en test ze.',
		validate: validate,
		clearCode: true,
		code: 'var x = 10;\nvar resultaat;\nif ( x > 3 * 2 )\n{\n\tresultaat = \'Ik ben groter dan 3 * 2\';\n}\nelse if ( x > 2 * 2 )\n{\n\tresultaat = \'Ik ben groter dan 2 * 2\';\n}\nelse\n{\n\tresultaat = \'Ik ben kleiner of gelijk aan 2 * 2\';\n}'
	};
});