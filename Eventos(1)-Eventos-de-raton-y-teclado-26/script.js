/* 
                Evento
Es cualquier cosa que suceda en nuestro documento 
    El contenido se ha leido
    El contenido se ha cargado
    El usuario mueve el raton
    El usuario pulsa una tecla
    La ventana se ha cerrado
    Y un largo etc.

sintaxis:
    Element.addEventListener('event', callback)
*/

/* 
Eventos de raton:
    click - cuando pulsamos el boton izquierdo del raton
    dblclick - cuando pulsamos dos veces seguidas el boton izquierdo del raton
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del raton
    mouseup - cuando soltamos el boton izquierdo del raton
    mousemove - cuando movemos el raton

Evento de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/

const button = document.getElementById("button");

const input = document.getElementById("input");

const box = document.getElementById("box");

/* button.addEventListener("click", () => {
  console.log("CLICK");
}); */

/* button.addEventListener("dblclick", () => {
  console.log("Evento Double-Click");
}); */

/* box.addEventListener("mouseenter", () => {
  box.classList.replace("red", "green");
});

box.addEventListener("mouseleave", () => {
  box.classList.replace("green", "red");
}); */

/* box.addEventListener("mousedown", () => {
  console.log("HAS PULSADO LA CAJA");
});

box.addEventListener("mouseup", () => {
  console.log("HAS DEJADO DE PULSAR LA CAJA");
}); */

/* box.addEventListener('mousemove', () => {
    console.log('ESTAS MOVIENDO EL RATON');
}); */

/* input.addEventListener('keydown', () => {
    console.log('PRESIONASTE UNA TECLA');
});

input.addEventListener('keyup', () => {
    console.log('SOLTASTE UNA TECLA');
});

input.addEventListener('keypress', () => {
    console.log('ESTAS MANTENIENDO PRESIONADA UNA TECLA');
}); */