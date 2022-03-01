(() => {

  type Hero = {
    name: string;
    age?: number;
    powers: string[] ;
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Alen',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo']
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['super velocidad'],
    getName(){
      return this.name;
    }
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