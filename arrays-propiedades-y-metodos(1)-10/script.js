let numbers = [1,2,3,4,5];

/* Array - propiedad
  .length - devuelve el numero de posiciones que contiene el array.
*/

/* console.log(numbers.length); */

/* Arrays - metodos
Array.isArray(variable a evaluar) - devuelve true si la variable es un Array
*/

/* let number = 4;

console.log(Array.isArray(number));
console.log(Array.isArray(numbers)); */

/* eliminar un elemento
.shift() - elimina el primer elemento del Array y devuelve ese elemento
.pop() - elimina el ultimo elemento de un Array y devuelve ese elemento
*/

/* console.log(numbers);
let deleteElement = numbers.shift();
console.log(numbers);
console.log(deleteElement); */

/* console.log(numbers);
let deleteElement = numbers.pop();
console.log(numbers);
console.log(deleteElement); */

/* añadir elementos
.unshift(element1, element2,...) - añade uno o mas elementos al comienzo del array y devuelve la nueva longitud
.push(element1, element2,...) - añade uno o mas elementos al final de array y devuelve la nueva longitud.
*/

/* console.log(numbers);
let newLength = numbers.unshift(0);
console.log(numbers);
console.log(newLength); */

/* console.log(numbers);
let newLength = numbers.push(6);
console.log(numbers);
console.log(newLength); */


/* .indexOf() - devuelve el primer indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado */

/* console.log(numbers);
console.log(numbers.indexOf(2)); */


/* .lastIndexOf() - devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si no es encontrado */

/* console.log(numbers);
let prueba = numbers.push(1);
console.log(numbers);
console.log(numbers.lastIndexOf(1)); */


/* .reverse() - Invierte el orden de los eleemntos del Array */

/* console.log(numbers);
let reverse = numbers.reverse();
console.log(reverse); */


/* .join('separador') - Devuelve un string con el separador que indiquemos, por defecto son comas */

/* console.log(numbers);
let ArrayString = numbers.join(' ');
console.log(ArrayString);
console.log(numbers.join('-'));
console.log(numbers.join()); */


/* .splice(a,b,items) - cambia el contenido de un Array eliminando elementos existentes y/o agregando nuevos elementos.
a - indice de inicio
b - numero de elementos (opcional)
items - elemento a añadir en el caso de que se añadan (opcional)

*/

/* elimina desde la posicion que le indiquemos hasta el final */
/* console.log(numbers);
numbers.splice(3);
console.log(numbers); */

/* elimina desde la posicion que indiquemos cuantos valores le indiquemos */
/* console.log(numbers);
numbers.splice(2,2); 
console.log(numbers); */

/* si b es un valor distinto de 0 elimina el numero de valores que indiquemos en b y añade los valores de items a partir de la posicion a */
/* console.log(numbers);
numbers.splice(2,2,10,54);
console.log(numbers); */

/* .slice(a,b) - extrae elementos de un array desde el indice a hasta el indice b. si no existe b lo hace hasta el final, si no existe a ni b hace una copia del original. */

/* let newNumbers = numbers.slice();
console.log(numbers);
console.log(newNumbers); */

/* let newNumbers = numbers.slice(2);
console.log(numbers);
console.log(newNumbers); */

/* let newNumbers = numbers.slice(1,4);
console.log(numbers);
console.log(newNumbers); */