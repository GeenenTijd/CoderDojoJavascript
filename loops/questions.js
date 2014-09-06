include('loops.questions', [
	'loops.q1',
	'loops.q2',
	'loops.q3',
	'loops.q4'
], function (q1, q2, q3, q4) {
	'use strict';
	return [q1, q2, q3, q4];
});