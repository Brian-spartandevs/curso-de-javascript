/* Ordenar 3 numero de mayor a menor
permutaciones con 3 elementos
posibilidades 3! = 3*2*1 = 6
abc = 321
acb= 312
bac = 231
bca = 132
cab = 213
cba = 123
*/

const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let a=prompt('introduzca el primer numero');
let b=prompt('introduzca el segundo numero');
let c=prompt('introduzca el tercer numero');

numbers.textContent = `los numeros introducidos son ${a}, ${b}, ${c}`

/* Ejercicio */

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El orden es : ${a}, ${b}, ${c}`  
    }else{
        result.textContent = `El orden es : ${a}, ${c}, ${b}`
    } 
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El orden es : ${b}, ${a}, ${c}`
    }else{
        result.textContent = `El orden es : ${b}, ${c}, ${a}`
    }
}else if(c>=a && c>=b){
    if(a>c){
        result.textContent = `El orden es : ${c}, ${a}, ${b}`
    }else{
        result.textContent = `El orden es : ${c}, ${b}, ${a}`
    }
}