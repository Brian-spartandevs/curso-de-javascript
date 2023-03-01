/* Spread Operator (operador de expasion) 

su sintaxis es...

*/

const numbers = [-12,2,3,23,43,2,3];

/* console.log(...numbers); */

//enviar elementos de un array a una funcion

/* const addNumbers = (a,b,c) =>{
    console.log(a+b+c);
}

numbersToAdd = [1,2,3];

addNumbers(...numbersToAdd); */

//añadir un array a otro array
/* let users = ['javier','david','rosa','juan','mercedes']

let newUsers = ['marta','jaime','laura']

users.push(...newUsers);

//users.push(newUsers[0],newUsers[1],newUsers[2]);

console.log(users); */

//copiar arrays
/* let arr1 = [1,2,3,4];

let arr2 = [...arr1];

console.log(arr2); */

//concatenar arrays
/* let arr1 = [1,2,3,4];

let arr2 = [6,7,8];

let arrConcat = [...arr1, ...arr2];
console.log(arrConcat); */

//enviar un numero indefinido de argumentos a una funcion (parametros REST)

/* const restParms = (...numbers) => {
    console.log(numbers);
}

restParms(1,2,3,4,5,6,7,8); */

//libreria math

/* console.log(Math.max(...numbers));
console.log(Math.min(...numbers)); */

//Eliminar elementos duplicados

/* console.log([...new Set(numbers)]); */