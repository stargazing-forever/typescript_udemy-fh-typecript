(() => {


  const fullName = ( firstName: string , lastName: string  ): string => {

    // no confiar siempre en typescript, evitar el any
    console.log(typeof(lastName))
    if(!firstName){
      throw new Error();
    }
    return `${firstName} ${lastName}`;
  }

  let noName: any = 1;

  console.log(fullName('peter', 'fajardo'));
  console.log(fullName('peter', noName));



})()