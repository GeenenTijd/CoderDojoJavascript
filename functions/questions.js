include('functions.questions', [
	'functions.q1',
	'functions.q2',
	'functions.q3',
	'functions.q4',
	'functions.q5',
	'functions.q6',
	'functions.q7'
], function (q1, q2, q3, q4, q5, q6, q7) {
	'use strict';
	return [q1, q2, q3, q4, q5, q6, q7];
});