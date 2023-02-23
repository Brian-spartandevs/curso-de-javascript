/* Funciones - Introduccion */

/* Son fragmentos de codigo que escribimos para ejecutar una tarea y no volver a escribir el mismo codigo mas de una vez.
Nos ayudan a modulizar el codigo.
Las funciones deben realizar una sola tarea.
*/


//sintaxis vieja
/* function nombreFuncion(){
    //codigo a ejecutar
} */

//sintaxis nueva --ES6--
/* const nombreFuncion = () =>{
    //codigo a ejecutar
} */

//pueden recibir parametros
/* function nombreFuncion(parametro1, parametro2,...){
    //codigo a ejecutar
} */

/* const nombreFuncion = (parametro1, parametro2,..) =>{
    //codigo a ejecutar
} */

//pueden devolver valores
/* function nombreFuncion(parametro1, parametro2){
    return parametro1+parametro2
} */

/* const nombreFuncion = (parametro1, parametro2) => parametro1+parametro2 */

//Practica

/* function saludar(){
    console.log('Hola');
} */

/* const saludar = () => console.log('Hola');
const saludarUsuario = (user) => console.log(`Hola ${user}`);

saludar();
saludarUsuario('Pepe'); */

/* const suma = (num1,num2) => {
    if(num1 == 2){
        return num1+num2
    }
    console.log('esto no se va a ejecutar si entra en el if')
    return num1
}

console.log(suma(3,4)); */

/* const suma = (num1,num2) => num1+num2

let result = suma(3,6);

console.log(result); */