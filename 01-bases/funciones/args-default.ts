(() => {


  const fullName = ( firstName: string , lastName?: string, secondName: string = '' ): string => {
    return `${firstName} ${secondName} ${lastName}`;
  }

  console.log(fullName('peter'));



})()