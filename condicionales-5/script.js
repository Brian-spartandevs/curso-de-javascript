/* flujo de un programa

el flujo de un programa siempre sera de arriba a abajo

let num=2;
console.log(num);
num=5;
console.log(num);
let word="Hola Mundo";
console.log(word);
*/

/* estructura de control de flujo

condicionales= simples, compuestos, multiples

bucles= determinados, indeterminados
*/

/* sintaxis de un condicional:

condicion simple:

if(condicion)//codigo a ejecutar

if(condicion){
  //codigo a ejecutar 1
  //codigo a ejecutar 2
}

condicion compuesta:

if(condicion)//codigo a ejecutar

else//codigo a ejecutar en caso contrario
*/

/* condicional simple */

/* let num = 5;

if(num>0) console.log(`${num} es mayor que 0`);

if(num>0){
    console.log(`${num} es mayor que 0`);
    console.log(`${num} es mayor que 0`);  
}  */

/* aqui no se imprimira porque -5 no es mayor que 0 */

/* num = -5;

if(num>0) console.log(`${num} es mayor que 0`); */

/* Condicional Compuesto */

/* if(num>0){
    console.log(`${num} es mayor que 0`);
      
}else{
    console.log(`${num} es menor que 0`);
} */

/* condicionales multiples */

/* num = 0;

if(num>0){
    console.log(`${num} es mayor que 0`)
}else if(num<0){
    console.log(`${num} es menor que 0`)
}else{
    console.log(`${num} es igual a 0`)
} */

/* operadores logicos */

/* && and, || or, ! NOT */

let num1 = 0;
let num2 = 5;

if(num1>0 && num2>0){
    console.log(`${num1} y ${num2} son mayores que 0`);
}else if(num1>0 || num2>0){
    console.log(`${num1} o ${num2} son mayores que 0`);
}