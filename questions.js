include('questions', ['questions.numbers', 'questions.name', 'questions.namelength', 'questions.boolean', 'questions.boolean2', 'questions.boolean3', 'questions.variable', 'questions.variable2'], function (numbers, name, namelength, boolean, boolean2, boolean3, variable, variable2) {
    'use strict';

    console.log('QUESTIONS');

    return [numbers, name, namelength, boolean, boolean2, boolean3, variable, variable2];
});