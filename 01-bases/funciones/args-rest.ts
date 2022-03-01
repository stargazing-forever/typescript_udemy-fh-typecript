(() => {

  const fullName = ( firstName: string, ...restArgs: string[] ): string => {
    return `Hello ${firstName} ${ restArgs.join(' ')}`;
  }

  console.log(fullName('Huder', 'Hugo', 'Jaden'));


})()