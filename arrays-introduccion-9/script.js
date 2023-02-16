/* Arrays

-Son estructura que nos permiten almacenar varios datos y agruparlos.

-se pueden llenar con cualquier tipo de dato valido en javascript y deben ir separados por comas.

-se pueden mezclar tipos de datos pero no es recomendable.

-se declaran con llaver cuadradas o corchetes [].

-pueden declararse vacios o con un contenido ya establecido.

-pueden añadirse o eliminarse elementos en el momento que queramos.

let numero = 5;

let array = [];// Array vacio

let numeros = [1,2,3,4,5];// Array con contenido inicial

-cada uno de los elementos podra ser indentificado por su indice, es decir su posicion.

-los indices empiezan a contar desde 0


*/

let numeros = [1,2,3,4,5];

console.log(numeros);

/* si queremos acceder a un valor que tenemos dentro del array podemos hacerlo desde su posicion */

let palabras=['hola', 'estamos', 'en', 'YouTube'];

console.log(numeros[0]+numeros[1]);

console.log(`La palabra "${palabras[3]}" tiene ${palabras[3].length} letras`);

let booleans=[true, true, false];