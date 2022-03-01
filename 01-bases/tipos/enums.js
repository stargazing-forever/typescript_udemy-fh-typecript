"use strict";
(function () {
    //ENUMS, NUEVO EN TYPESCRIPT
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 0] = "min";
        AudioLevel[AudioLevel["medium"] = 1] = "medium";
        AudioLevel[AudioLevel["max"] = 2] = "max";
    })(AudioLevel || (AudioLevel = {}));
    // let currentAudio = AudioLevel.max;
    var currentAudio = 10;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
