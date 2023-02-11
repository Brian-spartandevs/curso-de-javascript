/* Metodos y propiedades de los trings */

/* metodo: es todo aquello que la cadena puede hacer. Ej: convertirse en mayusculas. */
/* propiedad: son las caracteristicas que la cadena tiene por ser una cadena. Ej: longitud.  */

/* para utilizar estas propiedades y metodos se emplea la nomenclatura del punto:
estructura: cadena.metodo o en el caso de las propiedades cadena.propiedad */

/* los metodos tienen que llevar parentesis() */

/* strings */

let cadena = "Hola Mundo";

/* Propiedades
length -> devuelve la longitud de la cadena */

/* console.log(cadena.length); */

/* metodos */

/* todos los metodos devuelven una cadena nueva, la cadena original no sera modificada. */

/* toUpperCase() -> devuelve la cadena a mayusculas. */

/* console.log(cadena.toUpperCase());

let cadenaMayus = cadena.toUpperCase();

console.log(cadenaMayus); */

/* toLowerCase() -> devuelve la cadena a minusculas */

/* console.log(cadena.toLowerCase()); */

/* indexOf(string) -> devuelve la posicion en la que se encuentra el string, si no lo encuentra devuelve -1 */

/* console.log(cadena.indexOf("o"));
console.log(cadena.indexOf("Hola")); */

/* replace(valor a buscar, valor nuevo) -> reemplaza el fragmento de la cadena que le digamos y pone el valor nuevo */

/* console.log(cadena.replace("Mundo","Youtube")); */

/* substring(inicio [,fin]) -> extraer los caracteres desde el inicio hasta el final (el final no se incluye) 

si no se incluye el fin extrae hasta el final */

/* console.log(cadena.substring(3));
console.log(cadena.substring(3,7)); */

/* slice(inicio [,fin]) -> igual que substring pero admite valores negativos, si ponemos valores negativos emepezara desde atras

si no se incluye el final extrae hasta el final

   (2,-4) -> empieza a contar en el tercer caracter y los 4 ultimos no los considera
    */

/* console.log(cadena.slice(-3));
console.log(cadena.slice(2));
console.log(cadena.slice(0,-2)); */

/* trim() -> elimina los espacios al inicio y al final de la cadena */

/* let cadena2 = "     Hola youtube, estamos trabajando con cadenas     ";

console.log(cadena2);
console.log(cadena2.trim()) */

/* --ES6-- */

/* startsWith(valor [,inicio]) -> sirve para saber si la cadena termina con ese valor. Devuelve true o false */

/* console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("h"));

console.log(cadena.startsWith("M",5)); */

/* endsWith(valor [,longuitud]) -> Sirve pra saber si la cadena termina con ese valor. Devuleve true o false */

/* console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a",4));
console.log(cadena.endsWith("Mundo")); */

/* includes(valor [,inicio]) -> igual que indexOf pero devuelve true o false */

/* console.log(cadena.includes("n"));
console.log(cadena.includes("a",5));
console.log(cadena.includes("a",2)); */

/* repeat(string,valor) -> repite el string el numero de veces que le indiquemos */

/* let cadena3 = "Hola";

console.log(cadena3.repeat(3)); */

/* Template Strings */

let nombre = "Brian";
let apellido = "Arrieta";
let edad = 21;

console.log("Hola " + nombre + " " + apellido + ". Tienes " + edad + " años")

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`)

console.log(`Hola ${nombre} ${apellido}. El año que viene tendras ${edad+1} años.`)