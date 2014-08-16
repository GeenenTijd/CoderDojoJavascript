var variableQuestion = (function () {

    var question = '<h2>Variabele</h2><p>We hebben ondertussen al met tekst en getallen gewerkt en je weet wat een boolean is. Nu moeten we de computer dingen doen onthouden. Dit kunnen we doen met een variabele. Als we een stukje tekst in een variabele steken kunnen we later de tekst terug gebruiken via de variabele.</p><p>In javascript gebruiken we <code>var</code> om aan te geven dat we een variabele maken.</p><ul>Enkele voorbeelden:<li>var naam = \'Glenn\';</li><li>var leeftijd = 25;</li><li>var isCool = true;</li></ul><p>Maak een variabel mijnNaam met jou naam in.</p>';

    function validate() {
        var code = App.getCode();

        if (code.match(/(var mijnNaam)/g) === null) {
            App.showError('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
            return;
        }

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
            App.showError('Schrijf je naam tussen \'\'.');
            return;
        }

        try {
            eval(code);
            console.log(mijnNaam);
            if (typeof mijnNaam === 'string') {
                App.showCorrect('mijnNaam = ' + mijnNaam);
            } else {
                App.showError('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
            }
        } catch (e) {
            App.showError(e.message);
        }
    }

    return {
        question: question,
        validate: validate,
        clearCode: true
    };
})();