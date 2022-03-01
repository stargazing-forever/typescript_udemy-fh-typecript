"use strict";
(function () {
    var error = function (message) {
        throw new Error(message);
    };
    error('auxilio');
    console.log('hola mundo!');
})();
