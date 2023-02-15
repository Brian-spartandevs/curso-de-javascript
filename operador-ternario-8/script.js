/* operador ternario

se tiliza cuando una condicion sera true o false, al igual que if.
su ejecucion pude tene una o varias sentencias, en este caso iran separadas por comas y entre parentesis

sintaxis:
(condicion) ? true:false

(condicion) ?
    (primera sentencia,
        segunda sentencia)
    :
    (primera setencia,
        segunda sentencia)
*/

let num = 0;

/* con una sentencia */

(num>0) ? console.log(`${num} es mayor a 0`) : console.log(`${num} es menor o igual a 0`);

/* con dos sentencias.. */

(num>0) ?
(console.log(`${num} es mayor a 0`),
console.log(`${num} es mayor a 0`))
:
(console.log(`${num} es menor o igual a 0`),
console.log(`${num} es menor o igual a 0`))
