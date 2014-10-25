(function progress() {
    'use strict';

    function progressFactory() {

        function getLastQuestion(category) {
            if ('localStorage' in window && window.localStorage !== null) {
                var storageVar = localStorage[category];
                if (typeof storageVar === 'undefined') {
                    return 1;
                }
                return parseInt(storageVar) + 1;
            }
            return 1;
        }

        function hasPermission(category, question) {
            if (question === 1) {
                return true;
            } else if ('localStorage' in window && window.localStorage !== null) {
                var storageVar = localStorage[category];
                if (typeof storageVar === 'undefined') {
                    return false;
                }
                return question <= parseInt(storageVar) + 1;
            }
            return false;
        }

        function save(category, question) {
            if ('localStorage' in window && window.localStorage !== null) {
                if (question === 1 || question === getLastQuestion(category)) {
                    localStorage.setItem(category, question);
                }
            }
        }

        return {
            hasPermission: hasPermission,
            getLastQuestion: getLastQuestion,
            save: save
        };
    }

    angular.module('coderDojoApp')
        .factory('progressFactory', [progressFactory]);
})();