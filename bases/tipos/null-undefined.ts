(() => {
    // la prop es strictNullChecks
    //no recomendado desactivarlo
    
    // let isActive: boolean = null;

    //para no desactivar es mejor utilizar lo sgte
    let isActive2: (boolean | undefined) = undefined;
    let isLogin: (boolean | null) = null;

    // console.log(isActive);
    console.log(isActive2);
    console.log(isLogin);
})()