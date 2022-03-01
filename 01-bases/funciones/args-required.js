"use strict";
(function () {
    var fullName = function (firstName, lastName) {
        // no confiar siempre en typescript, evitar el any
        console.log(typeof (lastName));
        if (!firstName) {
            throw new Error();
        }
        return "".concat(firstName, " ").concat(lastName);
    };
    var noName = 1;
    console.log(fullName('peter', 'fajardo'));
    console.log(fullName('peter', noName));
})();
