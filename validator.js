const validator = {
  isValid:(NumTar) => {
      let newArray = NumTar.split(''); //crea un nuevo array con los números ingresados de la tarjeta y los separa con apostrofes
      let invert = newArray.reverse(); //invierte los números ingresados en el nuevo array

      let listaImpares = [];

      for (let i = 0; i < invert.length; i++) { //crea ciclo
          if (i % 2 !== 0) { //multiplica los numeros impares por 2
              listaImpares.push(invert[i] * 2);
          } else {
              listaImpares.push(invert[i] * 1); //multiplica numeros pares por 1
          }
      }
      let lista2 = [];

      for (let i = 0; i < invert.length; i++) {
          if (listaImpares[i] >= 10) { //si el valor del número impar es mayor o igual a 10
              lista2.push(listaImpares[i] - 9); //resta al número impar 9 lo añade a la lista2
          } else {
              lista2.push(listaImpares[i] * 1); //multiplica el número impar por 1 y lo añade a la lista 2
          }
      }
      const total = lista2.reduce((accumulator, current) => accumulator + current, 0);//suma todos los elementos de la lista 2
      let verificado = false;
      if (total % 10 === 0) {//si la suma es del modulo de 10 es 0 retorna true
          verificado = true;
      }
      return verificado;
  },

  maskify:(NumTar)=>{
      let maskedString = NumTar.split('');//crea un nuevo array separando los caracteres
      for (let i = 0; i < NumTar.length - 4; i++) {//crea un ciclo donde los primeros 12 dìgitos de la tarjeta los sustituye con un #
          maskedString[i] = "#";
      }
      return maskedString.join('');//une los números del array y los devuelve
      
  }
 
};

export default validator;
