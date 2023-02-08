/* sintaxis de js */

/* Es case sensitive: significa que distingue mayusculas de minusculas esto quiere decir que si tuvieramos una variable llamada Numero no es lo mismo que numero, el programa las considera dos variables completamente distintas
 */

/* Es de tipado debil o dinamico: esto significa que son del tipo de variable que almacenen */

/* las sentencias finalizan con (;): no es obligatorio pero es muy recomendable */

/* Los bloques terminan con (}): de forma opcional de puede poner ; despues de } */


/* Variables y Constantes y que es el scope o ambito de una variable */

/* Variable: es un espacio que reservamos en memoria para almacenar un dato que podra cambiar durante la ejecucion de nuestro programa. La palabra reservada para declarar variables es "let" no es recomendable usar "var".
Las variables se pueden: declarar, inicializar y modificar. */

/* Constantes: esn un espacio que reservamos en memoria para almacenar un dato que no cambiara durante la ejecucion de nuestro programa. La palabra reservada para declarar una constantes es "const". */

/* El scope o ambito de una variable o de una constante: es la zona donde existe nuestra variable o constante. */


/* DECLARACION, INICIALIZACION Y MODIFICACION */

/* Una variable se declara con la siguiente estructura:
let numero; */

/* Una variable se inicializa con la siguiente estructura:
numero = 5; */

/* se puede declarar e iniciar en la misma sentencia:
let numero = 5; */

/* para modificar el valor de una variable existente:
numero = 3; */

/* Las constantes solo admiten la declaracion e inicializacion en la misma sentencia.
const PI = 3,14; */

/* Tipos de datos en js */

/* Primitivos:

Numeros -> let numero = 5;

strings(cadenas) -> let palabra = 'hola'; let palabra = "hola;" 

boolean -> let respuesta = true; let respuesta = false

Undefined

Null

Symbol */

/* si queremos guardar un valor decimal se guarda el valor con punto y para valores negativos seria -5.3*/
let numero = 5.3;

/* para strings seria encerrar la palabra entre comillas */
let palabra = "hola mundo";

/* booleanos: en este caso los valores se ponen asi */
let respuesta = true;

/* en el caso de las constantes se declaran con mayusculas */
const PI = 3.14;

/* Para modificar el valor de una variable: ahora el nuevo valor es 54 y con respecto a las constantes no se puede hacer */
numero = 54;

/* para cambiar un string */
palabra = "adios";

/* para ver la variable se una console.log y entre () ponemos lo que quremos ver en consola */
console.log(PI);