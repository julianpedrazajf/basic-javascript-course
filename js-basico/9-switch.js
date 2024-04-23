switch (1) {
    case 1:
        console.log("Soy un uno");
        break;
    case 10:
        console.log("Soy un 10"); 
        break;  
    case 1:
        console.log("Soy un 100"); 
        break;
    default:
        consonle.log("No soy nada");
}

//

switch (1) {
    case 1:
        console.log("Soy un uno");
    case 10:
        console.log("Soy un 10");   
    case 1:
        console.log("Soy un 100"); 
    default:
        consonle.log("No soy nada");
}

/**En este desafío debes retornar un mensaje distinto dependiendo del artículo de tecnología que recibas:

Si recibes una "computadora", debes retornar el mensaje "Con mi computadora puedo programar usando JavaScript".
Si recibes un "celular", debes retornar el mensaje "En mi celular puedo aprender usando la app de Platzi".
Si recibes un "cable", debes retornar el mensaje "¡Hay un cable en mi bota!".
Y si no recibes ninguno de estos valores, debes retornar el mensaje "Artículo no encontrado".
Input

solution('computadora')
solution('celular')
solution('cable')
solution('ornitorrinco')

Output

Con mi computadora puedo programar usando JavaScript
En mi celular puedo aprender usando la app de Platzi
¡Hay un cable en mi bota!
Artículo no encontrado**/

export function solution(article) {
    switch (true) {
      case (article == "computadora"):
        return "Con mi computadora puedo programar usando JavaScript";
      case (article == "celular"):
        return "En mi celular puedo aprender usando la app de Platzi";
      case (article == "cable"):
        return "¡Hay un cable en mi bota!";
      default:
        return "Artículo no encontrado";
    }
  }