/* 
Arrays - Metodos II

.from(iterable) - convierte en array el elemento iterable

.sort([callback]) - ordena los elementos de un array alfabeticamente(valor Unicode), si le pasamos un callback los ordena en funcion del algoritmo que le pasemos

.forEach(callback(currentValue, [index])) - ejecuta la funcion indicada una vez por cada elemento del array

.some(callback) - comprueba si al menos un elemento del array cumple la condicion

.every(callback) - comprueba si todos los elementos del array cumplen la condicion

.map(callback) - transforma todos los elementos del array y devuelve un nuevo array

.filter(callback) - filtra todos los elementos del array que cumplan con la condicion

.reduce(callback) - reduce todos los elementos del array a un unico valor
*/

//FROM
/* let word = 'Hola Mundo';

console.log(Array.from(word));
console.log(word.split('')); */

//SORT
/* const letters = ['b','c','z','a'];
const numbers = [1,8,100,300,3];

console.log(letters.sort());
console.log(numbers.sort());

console.log(numbers.sort((a,b)=>a-b));
console.log(numbers.sort((a,b)=>b-a)); */

/* function menorMayor(a, b) {
    if (a-b < 0) return -1;
    if (a-b > 0) return 1;
    if(a == b) return 0;
    }
    function mayorMenor(a, b) {
    if (b-a < 0) return -1;
    if (b-a > 0) return 1;
    if(b == a) return 0;
    } */

//FOREACH
/* const numbers = [12,25,47,84,98];

numbers.forEach((number)=>console.log(number));
numbers.forEach((number,index)=>console.log(`${number} esta en la posicion ${index}`)); */

//SOME Y EVERY
/* const words = ['HTML','CSS','JavaScript','PHP'];

console.log(words.some((word)=>word.length>3));
console.log(words.every((word)=>word.length>3)); */

//MAP
/* const numbers = [12,25,47,84,98];

const numbers2 = numbers.map((number)=>number*2);

console.log(numbers2); */

//FILTER
/* const numbers = [12,25,47,84,98];

const numbers2 = numbers.filter((number)=>number>40);

console.log(numbers2); */

//REDUCE
/* const numbers = [12,25,47,84,98];

console.log(numbers.reduce((a,b)=>a+b)); */