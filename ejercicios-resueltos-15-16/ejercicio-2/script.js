/* 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado) */

let compareFigures = parseInt(prompt('¿Que figura deseas calcular? Coloca 1 para un triangulo, para un rectangulo 2 y para un circulo 3.'));
let height;
let base;
let radius;

if(compareFigures==1){
    base=prompt('dame la base del triangulo')
    height=prompt('dame la altura del triangulo')
    alert(`la base del triangulo es ${(base * height)/2}`)
}else if(compareFigures==2){
    base=prompt('dame la base del rectangulo')
    height=prompt('dame la altura del rectangulo')
    alert(`la base del rectangulo es ${(base * height)}cm²`)
}else if(compareFigures==3){
    radius=prompt('Dame el radio del circulo')
    alert(`El area del circulo es ${Math.PI * Math.pow(radius,2)}`)
}

/* segunda manera de hacerlo */

/* let figure = prompt('Introduce la figura geómetrica de la que quieres calcular el área: triangle, rectangle or circle')

let base;
let height;
let radius;

switch(figure){
    case 'triangle':
        base=prompt('Introduce la base del triángulo')
        height=prompt('Introduce la altura del triángulo')
        alert(`El área del triángulo es ${(base*height)/2}`);
        break
    case 'rectangle':
        base=prompt('Introduce la base del rectángulo')
        height=prompt('Introduce la altura del rectángulo')
        alert(`El área del rectángulo es ${base*height}`);
        break
    case 'circle':
        radius=prompt('Introduce el radio del círculo')
        alert(`El área del círculo es ${Math.PI * Math.pow(radius,2)}`);
        break
    default: alert('La figura geométrica no es válida');
} */