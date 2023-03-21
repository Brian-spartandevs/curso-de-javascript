/* 
    Expresiones Regulares:
        Son una secuencia de caracteres que forman un patron de busqueda, principalmente utilizada para la busqueda de patrones de cadenas de caractres u operaciones de sustituciones.

    Sintaxis:
        /Patron/
    Banderas:
        i: Ignore case. No diferencia entre mayusculas y minusculas
        g: Global. Busca de forma global, es decir, no se para despues de la primera coincidencia
*/

const text = document.getElementById('text').text
const regEx = /lorem/gi

console.log(regEx.test(text))