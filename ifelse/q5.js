include('ifelse.q5', function () {

	var description = '<p>Je kan in één if blok meer dan één stukje code controleren. Je hebt <code>&&</code> (en) en <code>||</code> (of). Dit is net hetzelfde zoals het en-blokje en of-blokje in scratch.</p><ul><li><code>10 > 5 && 5 > 3</code> <code class="returns">true</code></li><li><code>10 < 5 && 5 > 3</code> <code class="returns">false</code></li><li><code>10 < 5 || 5 > 3</code> <code class="returns">true</code></li><li><code>10 < 5 || 5 < 3</code> <code class="returns">false</code></li></ul>';

	function validate(code, next) {

		if (code.match(/(if\((.{3,})\))/g) === null) {
			next('Schrijf code tussen de if haakjes.');
			return;
		}

		if (code.match(/(\&\&|\|\|)/g) === null) {
			next('Gebruik && of ||.');
			return;
		}

		try {
			eval(code);
			if (typeof waarOfNietWaar === 'string' && waarOfNietWaar === 'Ik ben waar') {
				next(null, 'Ik ben waar');
			} else {
				next('Ik ben niet waar');
			}
		} catch (e) {
			next(e.message);
		}
	}

	return {
		title: 'If',
		description: description,
		task: 'Schrijf tussen de if haakjes code die waar is en gebruik && of ||',
		validate: validate,
		clearCode: true,
		code: 'var waarOfNietWaar = \'Ik ben niet waar\';\n\nif()\n{\n\twaarOfNietWaar = \'Ik ben waar\';\n}'
	};
});