"use strict";
(function () {
    var flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super velocidad'],
        getName: function () {
            return this.name;
        }
    };
    flash = {
        name: 'nombre',
        age: 60,
        powers: ['super'],
        getName: function () {
            return this.name;
        }
    };
    console.log(flash.getName);
})();
