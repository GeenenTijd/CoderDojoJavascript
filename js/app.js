!function(){"use strict";function a(a){a.when("/",{templateUrl:"views/start.html"}).when("/variables/:questionid",{templateUrl:"views/main.html",controllerAs:"vm",controller:"variablesController"}).when("/ifelse/:questionid",{templateUrl:"views/main.html",controllerAs:"vm",controller:"ifelseController"}).when("/loops/:questionid",{templateUrl:"views/main.html",controllerAs:"vm",controller:"loopsController"}).when("/functions/:questionid",{templateUrl:"views/main.html",controllerAs:"vm",controller:"functionsController"}).when("/proficiat",{templateUrl:"views/main.html",controllerAs:"vm",controller:"proficiatController"}).otherwise({redirectTo:"/"})}a.$inject=["$routeProvider"],angular.module("coderDojoApp",["ngRoute"]).config(a)}(),function(){"use strict";function a(a,b,c,d){function e(){i.editor=CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"javascript"}),i.category="functions",i.question=parseInt(b.questionid),c.hasPermission(i.category,i.question)||(i.question=c.getLastQuestion(i.category)),i.question<c.getLastQuestion(i.category)&&(i.nextDisabled=!1),f()}function f(){var b=d.getQuestion(i.question);b?(i.title=b.title,i.task=b.task,i.templateurl=b.templateurl,i.questionValidate=b.validate,i.editor.setValue("undefined"!=typeof b.code?b.code:""),i.editor.focus()):a.path("/proficiat")}function g(){var a=i.editor.getValue();i.questionValidate(a,function(a,b){a?(i.result=null,i.error=a):(i.nextDisabled=!1,c.save(i.category,i.question),i.error=null,i.result=b)})}function h(){a.path("/functions/"+(i.question+1))}var i=this;i.validate=g,i.goNext=h,i.error=null,i.result=null,i.nextDisabled=!0,e()}angular.module("coderDojoApp").controller("functionsController",["$location","$routeParams","progressFactory","functionsQuestions",a])}(),function(){"use strict";function a(a,b,c,d){function e(){i.editor=CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"javascript"}),i.category="ifelse",i.question=parseInt(b.questionid),c.hasPermission(i.category,i.question)||(i.question=c.getLastQuestion(i.category)),i.question<c.getLastQuestion(i.category)&&(i.nextDisabled=!1),f()}function f(){var b=d.getQuestion(i.question);b?(i.title=b.title,i.task=b.task,i.templateurl=b.templateurl,i.questionValidate=b.validate,i.editor.setValue("undefined"!=typeof b.code?b.code:""),i.editor.focus()):a.path("/proficiat")}function g(){var a=i.editor.getValue();i.questionValidate(a,function(a,b){a?(i.result=null,i.error=a):(i.nextDisabled=!1,c.save(i.category,i.question),i.error=null,i.result=b)})}function h(){a.path("/ifelse/"+(i.question+1))}var i=this;i.validate=g,i.goNext=h,i.error=null,i.result=null,i.nextDisabled=!0,e()}angular.module("coderDojoApp").controller("ifelseController",["$location","$routeParams","progressFactory","ifelseQuestions",a])}(),function(){"use strict";function a(a,b,c,d){function e(){i.editor=CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"javascript"}),i.category="loops",i.question=parseInt(b.questionid),c.hasPermission(i.category,i.question)||(i.question=c.getLastQuestion(i.category)),i.question<c.getLastQuestion(i.category)&&(i.nextDisabled=!1),f()}function f(){var b=d.getQuestion(i.question);b?(i.title=b.title,i.task=b.task,i.templateurl=b.templateurl,i.questionValidate=b.validate,i.editor.setValue("undefined"!=typeof b.code?b.code:""),i.editor.focus()):a.path("/proficiat")}function g(){var a=i.editor.getValue();i.questionValidate(a,function(a,b){a?(i.result=null,i.error=a):(i.nextDisabled=!1,c.save(i.category,i.question),i.error=null,i.result=b)})}function h(){a.path("/loops/"+(i.question+1))}var i=this;i.validate=g,i.goNext=h,i.error=null,i.result=null,i.nextDisabled=!0,e()}angular.module("coderDojoApp").controller("loopsController",["$location","$routeParams","progressFactory","loopsQuestions",a])}(),function(){"use strict";function a(a){function b(){}function c(){a.path("/")}var d=this;d.validate=b,d.goNext=c,d.error=null,d.result=null,d.templateurl="views/proficiat.html",d.title="Proficiat",d.task="Ga terug naar start.",d.nextDisabled=!1,d.editor=CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"javascript"})}angular.module("coderDojoApp").controller("proficiatController",["$location",a])}(),function(){"use strict";function a(a,b,c,d){function e(){i.editor=CodeMirror.fromTextArea(document.getElementById("code"),{lineNumbers:!0,styleActiveLine:!0,matchBrackets:!0,mode:"javascript",viewportMargin:1/0}),i.category="variables",i.question=parseInt(b.questionid),c.hasPermission(i.category,i.question)||(i.question=c.getLastQuestion(i.category)),i.question<c.getLastQuestion(i.category)&&(i.nextDisabled=!1),f()}function f(){var b=d.getQuestion(i.question);b?(i.title=b.title,i.task=b.task,i.templateurl=b.templateurl,i.questionValidate=b.validate,i.editor.setValue("undefined"!=typeof b.code?b.code:""),i.editor.focus()):a.path("/proficiat")}function g(){var a=i.editor.getValue();i.questionValidate(a,function(a,b){a?(i.result=null,i.error=a):(i.nextDisabled=!1,c.save(i.category,i.question),i.error=null,i.result=b)})}function h(){a.path("/variables/"+(i.question+1))}var i=this;i.validate=g,i.goNext=h,i.error=null,i.result=null,i.nextDisabled=!0,e()}angular.module("coderDojoApp").controller("variablesController",["$location","$routeParams","progressFactory","variablesQuestions",a])}(),function(){"use strict";function a(){function a(a){if("localStorage"in window&&null!==window.localStorage){var b=localStorage[a];return"undefined"==typeof b?1:parseInt(b)+1}return 1}function b(a,b){if(1===b)return!0;if("localStorage"in window&&null!==window.localStorage){var c=localStorage[a];return"undefined"==typeof c?!1:b<=parseInt(c)+1}return!1}function c(b,c){"localStorage"in window&&null!==window.localStorage&&(1===c||c===a(b))&&localStorage.setItem(b,c)}return{hasPermission:b,getLastQuestion:a,save:c}}angular.module("coderDojoApp").factory("progressFactory",[a])}(),function(){function functionsQuestions(){function a(a){return 1===a?call1:2===a?call2:3===a?call3:4===a?write1:5===a?write2:6===a?write3:7===a?write4:8===a?practice1:9===a?practice2:null}return{getQuestion:a}}var call1={title:"Functies",task:"Roep de functie tweeMaalTwee op en stop het resultaat in een variabele uitkomst.",templateurl:"views/functions/call1.html",code:"function tweeMaalTwee () {\n	return 2 * 2;\n}\n",validate:function(code,next){if(null===code.match(/(var uitkomst)/g))return void next("Maak een variabele uitkomst die het resultaat van de functie tweeMaalTwee opslaat.");try{eval(code),"number"==typeof uitkomst&&4===uitkomst?next(null,"uitkomst is "+uitkomst):next("Maak een variabele uitkomst die het resultaat van de functie tweeMaalTwee opslaat.")}catch(e){next(e.message)}}},call2={title:"Functies",task:"Roep de functie tweeMaal op en stop het resultaat in een variabele uitkomst.",templateurl:"views/functions/call2.html",code:"function tweeMaal (getal) {\n	return getal * 2;\n}\n",validate:function(code,next){if(null===code.match(/(var uitkomst)/g))return void next("Maak een variabele uitkomst die het resultaat van de functie tweeMaal opslaat.");try{eval(code),"number"==typeof uitkomst?next(null,"uitkomst is "+uitkomst):next("Maak een variabele uitkomst die het resultaat van de functie tweeMaal opslaat.")}catch(e){next(e.message)}}},call3={title:"Functies",task:"Roep de functie mijnNaam op en stop het resultaat in een variabele uitkomst.",templateurl:"views/functions/call3.html",code:"function mijnNaam() {\n	return 'CoderDojo';\n}\n",validate:function(code,next){if(null===code.match(/(var uitkomst)/g))return void next("Maak een variabele uitkomst die het resultaat van de functie mijnNaam opslaat.");try{eval(code),"string"==typeof uitkomst&&"CoderDojo"===uitkomst?next(null,"uitkomst is "+uitkomst):next("Maak een variabele uitkomst die het resultaat van de functie mijnNaam opslaat.")}catch(e){next(e.message)}}},write1={title:"Functies",task:"Laat de functie mijnLeeftijd jou leeftijd teruggeven.",templateurl:"views/functions/write1.html",code:"function mijnLeeftijd () {\n	\n}\n\nvar leeftijd = mijnLeeftijd();",validate:function(code,next){if(null===code.match(/(return)/g))return void next("Gebruik return om aan te geven wat de functie teruggeeft.");try{eval(code),"number"==typeof leeftijd?next(null,"leeftijd is "+leeftijd):next("Gebruik return om aan te geven wat de functie teruggeeft.")}catch(e){next(e.message)}}},write2={title:"Functies",task:"Laat de functie mijnNaam jou naam teruggeven.",templateurl:"views/functions/write2.html",code:"function mijnNaam () {\n	\n}\n\nvar naam = mijnNaam();",validate:function(code,next){if(null===code.match(/(return)/g))return void next("Gebruik return om aan te geven wat de functie teruggeeft.");try{eval(code),"string"==typeof naam?next(null,"naam is "+naam):next("Gebruik return om aan te geven wat de functie teruggeeft.")}catch(e){next(e.message)}}},write3={title:"Functies",task:"Roep de methode tweeMaal aan vanuit tweeMaalTwee.",templateurl:"views/functions/write3.html",code:"function tweeMaal (getal) {\n	return getal * 2;\n}\n\nfunction tweeMaalTwee () {\n	\n}\n\nvar uitkomst = tweeMaalTwee();",validate:function(code,next){if(null===code.match(/(tweeMaal\(\s2\)|tweeMaal\(2\)|tweeMaal\(\s2\s\))/g))return void next("Roep de methode tweeMaal aan vanuit tweeMaalTwee en return het resultaat.");try{eval(code),"number"==typeof uitkomst&&4===uitkomst?next(null,"uitkomst is "+uitkomst):next("Roep de methode tweeMaal aan vanuit tweeMaalTwee en return het resultaat.")}catch(e){next(e.message)}}},write4={title:"Functies",task:"Maak een variabele uitkomst die de som is van de functies deling en verschil.",templateurl:"views/functions/write4.html",code:"function verschil () {\n	return 19 - 12;\n}\n\nfunction deling () {\n	return 54 / 6;\n}\n\n",validate:function(code,next){if(null===code.match(/(var uitkomst)/g))return void next("Maak een variabele uitkomst.");if(null===code.match(/(deling\(\))/g))return void next("Tel het resultaat van de functie deling op bij het resultaat van de functie verschil.");if(null===code.match(/(verschil\(\))/g))return void next("Tel het resultaat van de functie deling op bij het resultaat van de functie verschil.");try{eval(code),"number"==typeof uitkomst&&16===uitkomst?next(null,"uitkomst is "+uitkomst):next("Maak een variabele uitkomst die de som is van de functies deling en verschil.")}catch(e){next(e.message)}}},practice1={title:"Functies",task:"Vul de functie benIkVolwassen aan zodat wanneer de leeftijd groter of gelijk is aan 18 de tekst 'Ik ben volwassen' wordt teruggestuurd, anders stuur je de tekst 'Ik moet nog groeien' terug.",templateurl:"views/functions/practice1.html",code:"function benIkVolwassen(leeftijd) {\n	\n}",validate:function(code,next){if(null===code.match(/(if)/g))return void next("Gebruik if( ) { } else { }");if(null===code.match(/(else)/g))return void next("Gebruik if( ) { } else { }");if(null===code.match(/(\'Ik ben volwassen\')/g))return void next("Stuur Ik ben volwassen terug als leeftijd groter of gelijk is aan 18.");if(null===code.match(/(\'Ik moet nog groeien\')/g))return void next("Stuur Ik moet nog groeien terug als de leeftijd kleiner is dan 18.");if(null===code.match(/(return)/g))return void next("Gebruik return om het resultaat van de functie terug te geven.");try{eval(code),"Ik moet nog groeien"===benIkVolwassen(5)&&"Ik ben volwassen"===benIkVolwassen(18)?next(null,"uitkomst van benIkVolwassen(18) is "+benIkVolwassen(18)):next("Vul de functie benIkVolwassen aan zodat wanneer de leeftijd groter of gelijk is aan 18 de tekst 'Ik ben volwaseen' wordt teruggestuurd, anders stuur je de tekst 'Ik moet nog groeien' terug.")}catch(e){next(e.message)}}},practice2={title:"Functies",task:"Roep de functie som op met twee parameters zodat het resultaat 10 is. Stop het resultaat in de variabele uitkomst.",templateurl:"views/functions/practice2.html",code:"function som (getal1, getal2) {\n	return getal1 + getal2;\n}\n\nvar uitkomst =",validate:function(code,next){if(null===code.match(/(som\(|som\s\()/g))return void next("Roep de methode som op.");try{eval(code),"number"==typeof uitkomst&&10===uitkomst?next(null,"uitkomst is "+uitkomst):next("Zorg dat het resultaat van de functie som 10 is.")}catch(e){next(e.message)}}};angular.module("coderDojoApp").factory("functionsQuestions",[functionsQuestions])}(),function(){function ifelseQuestions(){function a(a){return 1===a?if1:2===a?if2:3===a?if3:4===a?if4:5===a?if5:6===a?if6:7===a?else1:8===a?else2:9===a?elseif1:10===a?elseif2:11===a?elseif3:null}return{getQuestion:a}}var if1={title:"If",task:"Vul je leeftijd in en test de code.",templateurl:"views/ifelse/if1.html",code:"var leeftijd = \nvar ikBenVolwassen = false;\n\nif(leeftijd > 18)\n{\n	ikBenVolwassen = true;\n}",validate:function(code,next){if(null===code.match(/(var leeftijd =)(\s[0-9]|[0-9])/g))return void next("Vul je leeftijd in.");try{eval(code),ikBenVolwassen?next(null,"ikBenVolwassen is waar"):next(null,"ikBenVolwassen is niet waar")}catch(e){next(e.message)}}},if2={title:"If",task:"Verander de code zodat ikBenVolwassen waar wordt.",templateurl:"views/ifelse/if2.html",code:"var leeftijd = 12;\nvar ikBenVolwassen = false;\n\nif(leeftijd > 18)\n{\n	ikBenVolwassen = true;\n}",validate:function(code,next){if(null===code.match(/(var leeftijd =)(\s[0-9]|[0-9])/g))return void next("Vul je leeftijd in.");try{eval(code),ikBenVolwassen?next(null,"ikBenVolwassen is waar"):next("Verander de code zodat ikBenVolwassen waar wordt.")}catch(e){next(e.message)}}},if3={title:"If",task:"Schrijf tussen de if haakjes code die waar is.",templateurl:"views/ifelse/if3.html",code:"var waarOfNietWaar = 'Ik ben niet waar';\n\nif()\n{\n	waarOfNietWaar = 'Ik ben waar';\n}",validate:function(code,next){if(null===code.match(/(if\((.{3,})\))/g))return void next("Schrijf code tussen de if haakjes.");try{eval(code),"string"==typeof waarOfNietWaar&&"Ik ben waar"===waarOfNietWaar?next(null,"Ik ben waar"):next("Ik ben niet waar")}catch(e){next(e.message)}}},if4={title:"If",task:"Schrijf tussen de if haakjes code die niet waar is.",templateurl:"views/ifelse/if4.html",code:"var waarOfNietWaar = 'Ik ben niet waar';\n\nif()\n{\n	waarOfNietWaar = 'Ik ben waar';\n}",validate:function(code,next){if(null===code.match(/(if\((.{3,})\))/g))return void next("Schrijf code tussen de if haakjes.");try{eval(code),"string"==typeof waarOfNietWaar&&"Ik ben niet waar"===waarOfNietWaar?next(null,"Ik ben niet waar"):next("Ik ben waar")}catch(e){next(e.message)}}},if5={title:"If",task:"Schrijf tussen de if haakjes code die waar is en gebruik &&",templateurl:"views/ifelse/if5.html",code:"var waarOfNietWaar = 'Ik ben niet waar';\n\nif()\n{\n	waarOfNietWaar = 'Ik ben waar';\n}",validate:function(code,next){if(null===code.match(/(if\((.{3,})\))/g))return void next("Schrijf code tussen de if haakjes.");if(null===code.match(/(\&\&)/g))return void next("Gebruik &&.");try{eval(code),"string"==typeof waarOfNietWaar&&"Ik ben waar"===waarOfNietWaar?next(null,"Ik ben waar"):next("Ik ben niet waar")}catch(e){next(e.message)}}},if6={title:"If",task:"Schrijf tussen de if haakjes code die waar is en gebruik ||",templateurl:"views/ifelse/if6.html",code:"var waarOfNietWaar = 'Ik ben niet waar';\n\nif()\n{\n	waarOfNietWaar = 'Ik ben waar';\n}",validate:function(code,next){if(null===code.match(/(if\((.{3,})\))/g))return void next("Schrijf code tussen de if haakjes.");if(null===code.match(/(\|\|)/g))return void next("Gebruik ||.");try{eval(code),"string"==typeof waarOfNietWaar&&"Ik ben waar"===waarOfNietWaar?next(null,"Ik ben waar"):next("Ik ben niet waar")}catch(e){next(e.message)}}},else1={title:"If Else",task:"Wat gaat resulaat zijn? Test of je gelijk hebt.",templateurl:"views/ifelse/else1.html",code:"var x = 10;\nvar resultaat;\nif(x > 2 * 2)\n{\n	resultaat = 'Ik ben groter dan 2 * 2'\n}\nelse\n{\n	resultaat = 'Ik ben kleiner of gelijk aan 2 * 2'\n}",validate:function(code,next){try{eval(code),"undefined"!=typeof resultaat&&"string"==typeof resultaat?next(null,resultaat):next("Oei oei, de code is kapot.")}catch(e){next(e.message)}}},else2={title:"If Else",task:"Schrijf code zodat wanneer fouten gelijk is aan 0 resultaat 'Alles juist' wordt en anders resultaat 'Iets fout' wordt.",templateurl:"views/ifelse/else2.html",code:"var fouten = 0;\nvar resultaat = 'Ik moet nog beginnen';\nif()\n{\n	resultaat = 'Alles juist';\n}\nelse\n{\n	resultaat = 'Iets fout';\n}",validate:function(code,next){if(null===code.match(/(fouten===0|fouten\s===0|fouten===\s0|fouten\s===\s0)/g))return void next("Controleer of fouten gelijk is aan 0 (===).");try{eval(code),"number"==typeof fouten&&"Alles juist"===resultaat?next(null,"resultaat is "+resultaat):next("Controleer of fouten gelijk is aan 0 (===).")}catch(e){next(e.message)}}},elseif1={title:"Else If",task:"Begrijp de code en test ze.",templateurl:"views/ifelse/elseif1.html",code:"var x = 5;\nvar resultaat;\nif ( x > 3 * 2 )\n{\n	resultaat = 'Ik ben groter dan 3 * 2';\n}\nelse if ( x > 2 * 2 )\n{\n	resultaat = 'Ik ben groter dan 2 * 2';\n}\nelse\n{\n	resultaat = 'Ik ben kleiner of gelijk aan 2 * 2';\n}",validate:function(code,next){try{eval(code),"string"==typeof resultaat?next(null,resultaat):next("Oei oei, de code is kapot.")}catch(e){next(e.message)}}},elseif2={title:"Else If",task:"Schrijf code tussen de if haakjes zodat het resultaat 'Ik ben kleiner of gelijk aan 4' is.",templateurl:"views/ifelse/elseif2.html",code:"var x = 4;\nvar resultaat;\nif ( )\n{\n	resultaat = 'Ik ben groter dan 7';\n}\nelse if ( )\n{\n	resultaat = 'Ik ben groter dan 5';\n}\nelse\n{\n	resultaat = 'Ik ben kleiner of gelijk aan 4';\n}",validate:function(code,next){if(null===code.match(/(if\((.{3,})\)|if\s\((.{3,})\))/g))return void next("Schrijf code tussen de if haakjes.");try{eval(code),"string"==typeof resultaat&&"Ik ben kleiner of gelijk aan 4"===resultaat?next(null,resultaat):next(resultaat)}catch(e){next(e.message)}}},elseif3={title:"If",task:"Schrijf code tussen de if haakjes zodat het resultaat 'Ik ben groter dan 5' is.",templateurl:"views/ifelse/elseif3.html",code:"var x = 6;\nvar resultaat;\nif ( )\n{\n	resultaat = 'Ik ben groter dan 7';\n}\nelse if ( )\n{\n	resultaat = 'Ik ben groter dan 5';\n}\nelse\n{\n	resultaat = 'Ik ben kleiner of gelijk aan 4';\n}",validate:function(code,next){if(null===code.match(/(if\((.{3,})\)|if\s\((.{3,})\))/g))return void next("Schrijf code tussen de if haakjes.");try{eval(code),"string"==typeof resultaat&&"Ik ben groter dan 5"===resultaat?next(null,resultaat):next(resultaat)}catch(e){next(e.message)}}};angular.module("coderDojoApp").factory("ifelseQuestions",[ifelseQuestions])}(),function(){function loopsQuestions(){function a(a){return 1===a?while1:2===a?while2:3===a?while3:4===a?while4:5===a?while5:6===a?for1:7===a?for2:8===a?for3:null}return{getQuestion:a}}var while1={title:"While",task:"Wat denk jij dat tekst gaat zijn? Test of je gelijk hebt.",templateurl:"views/loops/while1.html",code:"var x = 0;\nvar tekst = 'A';\n\nwhile(x < 3) {\n	tekst = tekst + 'A';\n	x = x + 1;\n}",validate:function(code,next){try{var result=eval(code);"string"==typeof tekst?next(null,"tekst is "+tekst):next("Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},while2={title:"While",task:"Verander de code zodat tekst AAA wordt.",templateurl:"views/loops/while2.html",code:"var x = 0;\nvar tekst = 'A';\n\nwhile(x < 3) {\n	tekst = tekst + 'A';\n	x = x + 1;\n}",validate:function(code,next){try{var result=eval(code);"string"==typeof tekst&&"AAA"===tekst?next(null,"tekst is "+tekst):next("string"==typeof tekst?"tekst is "+tekst:"Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},while3={title:"While",task:"Welke waarde heeft x op het einde? Test of je gelijk hebt.",templateurl:"views/loops/while3.html",code:"var x = 0;\nwhile(x < 10) {\n	x += 3;\n}",validate:function(code,next){try{var result=eval(code);"number"==typeof x?next(null,"x is "+x):next("Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},while4={title:"While",task:"Vul de while in zodat x 4 wordt.",templateurl:"views/loops/while3.html",code:"var x = 0;\nwhile( ) {\n	x += 2;\n}",validate:function(code,next){try{var result=eval(code);"number"==typeof x?4===x?next(null,"x is "+x):next("x is "+x):next("Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},while5={title:"While",task:"Vul de while in zodat tekst 'XYXY' wordt.",templateurl:"views/loops/while5.html",code:"var tekst = '';\nwhile( ) {\n	tekst += 'XY';\n}",validate:function(code,next){try{var result=eval(code);"string"==typeof tekst?"XYXY"===tekst?next(null,"tekst is "+tekst):next("tekst is "+tekst):next("Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},for1={title:"For",task:"Wat denk jij dat tekst gaat zijn? Test of je gelijk hebt.",templateurl:"views/loops/for1.html",code:"var tekst = 'A';\n\nfor(var i = 0; i < 3; ++i) {\n	tekst = tekst + 'A';\n}",validate:function(code,next){try{var result=eval(code);"string"==typeof tekst?next(null,"tekst is "+tekst):next("Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},for2={title:"For",task:"Verander de code zodat tekst AAA wordt.",templateurl:"views/loops/for2.html",code:"var tekst = 'A';\n\nfor(var i = 0; i < 3; ++i) {\n	tekst = tekst + 'A';\n}",validate:function(code,next){try{var result=eval(code);"string"==typeof tekst&&"AAA"===tekst?next(null,"tekst is "+tekst):next("string"==typeof tekst?"tekst is "+tekst:"Oei oei, er ging iets mis.")}catch(e){next(e.message)}}},for3={title:"For",task:"Welke waarde heeft x op het einde? Test of je gelijk hebt.",templateurl:"views/loops/while3.html",code:"var x = 0;\nfor(var i = 0; i < 3; ++i) {\n	x += 2;\n}",validate:function(code,next){try{var result=eval(code);"number"==typeof x?next(null,"x is "+x):next("Oei oei, er ging iets mis.")}catch(e){next(e.message)}}};angular.module("coderDojoApp").factory("loopsQuestions",[loopsQuestions])}(),function(){function variablesQuestions(){function a(a){return 1===a?intro1:2===a?intro2:3===a?intro3:4===a?boolean1:5===a?boolean2:6===a?boolean3:7===a?var1:8===a?var2:9===a?var3:10===a?var4:11===a?var5:null}return{getQuestion:a}}var intro1={title:"Getallen",task:"Tel twee getallen op.",templateurl:"views/variables/intro1.html",validate:function(code,next){if(null===code.match(/([0-9])(\s[+]\s|[+]|\s[+]|[+]\s)([0-9])/g))return void next("Tel twee getallen bij elkaar op.");try{var result=eval(code);"number"==typeof result?next(null,result):next("Tel twee getallen bij elkaar op.")}catch(e){next(e.message)}}},intro2={title:"Tekst",task:"Schrijf je naam als een string.",templateurl:"views/variables/intro2.html",validate:function(code,next){if(null===code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g))return void next("Schrijf je naam tussen ''.");try{var result=eval(code);"string"==typeof result&&result.length>0?next(null,result):next("Zet je naam tussen ' ' tekens.")}catch(e){next(e.message)}}},intro3={title:"Tekst",task:"Vraag de lengte van je naam op.",templateurl:"views/variables/intro3.html",validate:function(code,next){if(null===code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g))return void next("Schrijf je naam tussen '' tekens. Gebruik .length om de lengte op te vragen.");try{var result=eval(code);"number"==typeof result&&result>0?next(null,result):next("Schrijf je naam tussen ' ' tekens. Gebruik .length om de lengte op te vragen.")}catch(e){next(e.message)}}},boolean1={title:"Boolean",task:"Je weet al hoe je de lengte van je naam moet opvragen, laat ons nu controleren of je naam langer is dan 6.",templateurl:"views/variables/boolean1.html",validate:function(code,next){if(null===code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1(.length)/g))return void next("Schrijf je naam tussen aanhalingstekens, neem hier de lengte van (.length) en kijk of het langer is dan 6.");if(null===code.match(/(>6|> 6)/g))return void next("Kijk of de lengte groter is dan 6 ( gebruik > ).");try{var result=eval(code);"boolean"==typeof result?next(null,result):next("Is je naam langer dan 6 tekens. ( gebruik > )")}catch(e){next(e.message)}}},boolean2={title:"Boolean",task:"Controleer of 7 * 3 groter of gelijk is aan 20.",templateurl:"views/variables/boolean2.html",validate:function(code,next){if(null===code.match(/(7*3|7 *3|7* 3|7 * 3)/g))return void next("Controleer of 7 * 3 groter of gelijk is aan 20.");if(null===code.match(/(>=20|>= 20)/g))return void next("Controleer of 7 * 3 groter of gelijk is ( >= ) aan 20.");try{var result=eval(code);"boolean"==typeof result&&result?next(null,result):next("Controleer of 7 * 3 groter of gelijk is ( >= ) aan 20.")}catch(e){next(e.message)}}},boolean3={title:"Boolean",task:"Controleer of 'CoderDojo' 6 tekens heeft.",templateurl:"views/variables/boolean3.html",code:"'CoderDojo'",validate:function(code,next){if(null===code.match(/(\'CoderDojo\'.length)/g))return void next("Vraag de lengte van 'CoderDojo' ( .length ) op.");if(null===code.match(/(===6|=== 6)/g))return void next("Kijk of de lengte gelijk is aan 6 ( gebruik === ).");try{var result=eval(code);"boolean"==typeof result?next(null,result):next("Kijk of de lengte gelijk is aan 6 ( gebruik === ).")}catch(e){next(e.message)}}},var1={title:"Variabele",task:"Maak een variabel mijnNaam met jou naam in.",templateurl:"views/variables/var1.html",validate:function(code,next){if(null===code.match(/(var mijnNaam)/g))return void next("Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).");if(null===code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g))return void next("Schrijf je naam tussen ''.");try{eval(code),"string"==typeof mijnNaam?next(null,"mijnNaam is "+mijnNaam):next("Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).")}catch(e){next(e.message)}}},var2={title:"Variabele",task:"Maak een variabele tekens met de lengte van mijnNaam.",templateurl:"views/variables/var2.html",validate:function(code,next){if(null===code.match(/(var mijnNaam)/g))return void next("Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).");if(null===code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g))return void next("Schrijf je naam tussen ''.");if(null===code.match(/(var tekens =|var tekens=)/g))return void next("Maak een variabele aan met de naam tekens ( var tekens ).");if(null===code.match(/(mijnNaam.length)/g))return void next("Steek de lengte van mijnNaam in de variabele tekens ( mijnNaam.length ).");try{eval(code),"string"==typeof mijnNaam&&"number"==typeof tekens&&tekens===mijnNaam.length?next(null,"tekens is "+tekens):next("Maak een variabele met de naam tekens waar we het aantal tekens van mijnNaam insteken.")}catch(e){next(e.message)}}},var3={title:"Variabele",task:"Maak een variabele uitkomst die getal + 2 is.",code:"var getal = 43;\n\n",templateurl:"views/variables/var3.html",validate:function(code,next){if(null===code.match(/(var uitkomst)/g))return void next("Maak een variabele aan met de naam uitkomst ( var uitkomst ).");try{eval(code),"number"==typeof uitkomst&&"number"==typeof getal&&uitkomst===getal+2?next(null,"uitkomst is "+uitkomst):next("number"!=typeof uitkomst?"uitkomst is geen getal, zorg dat uitkomst gelijk is aan getal + 2.":"De variabele uitkomst is niet gelijk aan getal + 2.")}catch(e){next(e.message)}}},var4={title:"Variabele",task:"Maak een variabele leeftijd met jou leeftijd. Maak dan een variabele uitkomst die getal + leeftijd is.",code:"var getal = 13;\n\n",templateurl:"views/variables/var3.html",validate:function(code,next){if(null===code.match(/(var leeftijd)/g))return void next("Maak een variabele aan met de naam leeftijd ( var leeftijd ).");if(null===code.match(/(var uitkomst)/g))return void next("Maak een variabele aan met de naam uitkomst ( var uitkomst ).");try{eval(code),"number"==typeof uitkomst&&"number"==typeof getal&&"number"==typeof leeftijd&&uitkomst===getal+leeftijd?next(null,"uitkomst is "+uitkomst):next("number"!=typeof leeftijd?"leeftijd is geen getal.":"number"!=typeof uitkomst?"uitkomst is geen getal, zorg dat uitkomst gelijk is aan getal + leeftijd.":"De variabele uitkomst is niet gelijk aan getal + leeftijd.")}catch(e){next(e.message)}}},var5={title:"Variabele",task:"Maak een variabele mijnNaam met jou naam. Maak een variabele leeftijd met jou leeftijd. Steek in de variabele isGroter of de lengte van mijnNaam groter is dan leeftijd.",templateurl:"views/variables/var4.html",validate:function(code,next){if(null===code.match(/(var mijnNaam)/g))return void next("Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).");if(null===code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g))return void next("Schrijf je naam tussen ' '.");if(null===code.match(/(var leeftijd)/g))return void next("Maak een variabele aan met de naam leeftijd ( var leeftijd ).");if(null===code.match(/(var isGroter)/g))return void next("Maak een variabele aan met de naam isGroter ( var isGroter ).");if(null===code.match(/(mijnNaam.length)/g))return void next("Kijk of de lengte van mijnNaam ( mijnNaam.length ) groter is dan leeftijd.");try{eval(code),"string"==typeof mijnNaam&&"number"==typeof leeftijd&&"boolean"==typeof isGroter&&isGroter===mijnNaam.length>leeftijd?next(null,"isGroter is "+isGroter):next("number"!=typeof leeftijd?"leeftijd is geen getal.":"Maak een variabele mijnNaam met jou naam. Maak een variabele leeftijd met jou leeftijd. Maak een variabele isGroter die kijkt of de lengte van mijnNaam groter is dan leeftijd.")}catch(e){next(e.message)}}};angular.module("coderDojoApp").factory("variablesQuestions",[variablesQuestions])}();