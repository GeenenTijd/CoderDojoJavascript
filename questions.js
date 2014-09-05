include('questions', ['vars.questions', 'ifelse.questions', 'loops.questions', 'functions.questions'], function (varq, ifelseq, loopsq, functionsq) {
	'use strict';

	var query = window.location.search.substring(1);
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] === 'group') {

			if (pair[1] === 'variables') {
				return varq;
			} else if (pair[1] === 'ifelse') {
				return ifelseq;
			} else if (pair[1] === 'loops') {
				return loopsq;
			} else if (pair[1] === 'functions') {
				return functionsq;
			}
		}
	}
	return null;
});