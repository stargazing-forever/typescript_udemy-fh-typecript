"use strict";
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "Hello ".concat(firstName, " ").concat(restArgs.join(' '));
    };
    console.log(fullName('Huder', 'Hugo', 'Jaden'));
})();
