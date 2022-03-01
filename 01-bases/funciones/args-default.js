"use strict";
(function () {
    var fullName = function (firstName, lastName, secondName) {
        if (secondName === void 0) { secondName = ''; }
        return "".concat(firstName, " ").concat(secondName, " ").concat(lastName);
    };
    console.log(fullName('peter'));
})();
