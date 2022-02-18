(() => {
    //ENUMS, NUEVO EN TYPESCRIPT
    enum AudioLevel {
        min,
        medium,
        max
    }

    // let currentAudio = AudioLevel.max;
    let currentAudio: AudioLevel = 10;
    console.log(currentAudio)
    console.log(AudioLevel)
})()