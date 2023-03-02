/* 
Atributos
    element.getAttribute('Attribute')
    element.setAttribute('Attribute', value)

Clases
    element.classList.add('class','class',...)
    element.classList.remove('class','class',...)
    element.classList.toggle('class'[,force])
    element.classList.contain('class')
    element.classList.replace('oldClass', newClass)
    
Atributos directos
    id
    value
*/

const title = document.getElementById('title');
const name = document.getElementById('name');


//Atributos
//console.log(name.getAttribute('type'));
//name.setAttribute('type', 'date');

//Clases

//title.classList.add('first-class','second-class')
//title.classList.remove('title')

/* if(title.classList.contains('title')) console.log('class tiene el valor title')
else console.log('class no tiene el valor title') */
/* console.log(title.classList.contains('title')); */

/* title.classList.replace('title','main-title') */

/* console.log(title.innerHTML);
console.log(title.textContent); */
/* console.log(name.value); */

console.log(title);
console.log(name);