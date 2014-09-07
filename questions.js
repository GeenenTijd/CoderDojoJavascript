(function () {
    'use strict';
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] === 'group') {
            if (pair[1] === 'variables') {
                include(['vars.questions'], function (varq) {
                    return varq;
                });
            } else if (pair[1] === 'ifelse') {
                include(['ifelse.questions'], function (ifelseq) {
                    return ifelseq;
                });
            } else if (pair[1] === 'loops') {
                include(['loops.questions'], function (loopsq) {
                    return loopsq;
                });
            } else if (pair[1] === 'functions') {
                include(['functions.questions'], function (functionsq) {
                    return functionsq;
                });
            }
        }
    }
    return null;
})();