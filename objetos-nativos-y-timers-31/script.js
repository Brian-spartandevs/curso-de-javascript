const button = document.getElementById('button')

/* 
Objeto window - Es el objeto global, de el descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

/* let name = prompt('escribe tu nombre')
console.log(name) */

/* let name = prompt('Escribe tu nombre')
console.log(name); */

/* if(confirm('Acepta?')){
    console.log('El usuario acepto')
}else{
    console.log('el usuario no acepto')
} */

/* 
Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir()
    console.error()
    console.table()
*/

/* console.log(button); */

/* console.dir(button); */

/* console.error('error'); */

/* const person = {
    name: 'Brian',
    age: 21,
    email: 'brian@spartandevs.com'
}

console.table(person); */

/* 
Objeto Location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href
    location.protocol
    location.host
    location.pathname
    location.hash
    location.reload()
*/

/* console.log(location.href); */

/* console.log(location.protocol); */

/* console.log(location.host); */

/* console.log(location.pathname); */

/* console.log(location.hash); */

/* console.log(location.reload()); */

/* location.href = 'https://www.google.com' */

/* 
Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    history.back()
    history.forward()
    history.go(n| -n)

    history.length
*/

/* 
Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

/* const date = new Date()

console.log(date); */

/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout

    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/* button.addEventListener('click', () => {
    //setTimeout(saludar,3000)
    const timeOut = setTimeout(() => {
        console.log('adios')
    }, 3000);

    clearTimeout(timeOut);
}) */

/* const timeOut = setTimeout(()=>{
    console.log('adios')
},3000)

button.addEventListener('click', () => {
    clearTimeout(timeOut);
}) */

const saludar = () => {
    console.log('Hola');
}

let cont = 0;

/* const interval = setInterval(saludar, 3000); */

const interval = setInterval(() => {
    console.log(cont);
    cont++    
}, 1000);

button.addEventListener('click', () => {
    clearInterval(interval);
})