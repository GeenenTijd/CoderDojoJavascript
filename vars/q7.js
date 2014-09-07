include('vars.q7', function () {

    var description = '<p>We hebben ondertussen al met tekst en getallen gewerkt en je weet wat een boolean is. Nu moeten we de computer dingen doen onthouden. Dit kunnen we doen met een variabele. Als we een stukje tekst in een variabele steken kunnen we later de tekst terug gebruiken via de variabele.</p><p>In javascript gebruiken we <code>var</code> om aan te geven dat we een variabele maken.<ul><li><code>var naam = \'Glenn\';</code></li><li><code>var leeftijd = 25;</code></li><li><code>var isCool = true;</code></li></ul></p>';

    function validate(code, next) {

        if (code.match(/(var mijnNaam)/g) === null) {
            next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
            return;
        }

        if (code.match(/([\"\'])(?:(?=(\\?))\2.)*?\1/g) === null) {
            next('Schrijf je naam tussen \'\'.');
            return;
        }

        try {
            eval(code);
            if (typeof mijnNaam === 'string') {
                next(null, 'mijnNaam is ' + mijnNaam);
            } else {
                next('Maak een variabele aan met de naam mijnNaam ( var mijnNaam ).');
            }
        } catch (e) {
            next(e.message);
        }
    }

    return {
        title: 'Variabele',
        description: description,
        task: 'Maak een variabel mijnNaam met jou naam in.',
        validate: validate,
        clearCode: true
    };
});