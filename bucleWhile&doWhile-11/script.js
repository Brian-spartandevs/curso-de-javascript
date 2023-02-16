/* Bucles
-se usan cuando queremos que un trozo de codigo se repita

-existen bubles determinados e indeterminados:

-los determinados se usan cuando especificamos el numero de veces que se van a repetir
    imprimir numeros del 1 al 10

-los indeterminados se usan cuando no sabemos el numero de veces que se van a repetir
    repetir mensaje de introducir contraseña

la estructura de un bucle siempre es la misma:
    bucle{
        //codigo a ejecutar
    }

*/

/* Bucle While
-Es un bucle indeterminado ya que no sabemos cuantas vueltas dara durante su ejecucion

-su sintaxis se compone de una unica parte:
    -condicion de salida.

    While(condicion){
        //codigo a ejecutar
    }

   Bucle Do While
-Es un bucle indeterminado ya que no sabemos cuantas vueltas dara durante su ejecucion

-su sintaxis se compone de dos partes:
    -codigo a ejecutar.
    -condicion de salida.

    do{
        //codigo a ejecutar
    }While(condicion)

*/

let pass = '';

/* while(pass != 'hola'){
    pass = prompt('introduzca su contraseña');
}

console.log('fin del bucle'); */

do{
    pass = prompt('introduzca su contraseña');
}while(pass != 'hola')

console.log('fin del bucle');