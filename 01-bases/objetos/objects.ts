(() => {

  let flash: {name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Barry Alen',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo']
  }


  flash = {
    name: 'nombre',
    age: 60,
    powers: ['super'],
    getName() {
      return this.name;
    }
  }

  console.log(flash.getName)



})()