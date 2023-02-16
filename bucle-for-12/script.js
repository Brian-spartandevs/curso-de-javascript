/* Bucle For
-Este es un bucle determinado ya que hay que especificar cuantas vueltas dara durante su ejecucion

su sintaxis se compone de 3 partes:
    -iniciacion de variable
    -numero de vueltas
    -incremento o decremento

for(let i=0;i<=10;i++){
    //codigo a ejecutar
}

-durante su ejecucion i aumentara su valor con cada vuelta
    for(i=0;i<=3;i++){
        console.log(i);
    }

    1era vuelta: i=0 - ¿i<=3? - 0 - i++
    2da vuelta: i=1 - ¿i<=3? - 1 - i++
    3era vuelta: i=2 - ¿i<=3? - 2 - i++
    4ta vuelta: i=3 - ¿i<=3? - 3 - i++
    5ta vuelta: i=4 - ¿i<=3? - fin del bucle

*/

/* for(let i=0;i<=10;i++){
    console.log(i);
} */

/* for(let i=0;i<=10;i++){
    if(i==5){
        console.log(i);
    }
} */

/* for(let i=0;i<=10;i++){
    if(i!=5){
        console.log(i);
    }
} */

let numbers = [56,14,23,7,31,59];

for(let i=0;i<numbers.length;i++){
    console.log(`i vale ${i} y el valor de esa posicion en array es ${numbers[i]}`);
}