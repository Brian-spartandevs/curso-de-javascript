/* 
document.getElementById('id') - acceder a un elmento a traves de su id

document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS

document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList 
*/

//document.getElementById('id')

/* const title = document.getElementById('title');

title.textContent = 'DOM - Accediendo a nodos'; */

//document.querySelector('selectorCSS')

/* const paragraph = document.querySelector('.paragraph');

const span = document.getElementById('title').querySelector('span');

console.log(span.textContent); */

//document.querySelectorAll('SelectorCSS')

const paragraphs = document.querySelectorAll('.paragraph');

const paragraphsSpread = [...document.querySelectorAll('.paragraph')];
const paragraphsArray = Array.from(document.querySelectorAll('.paragraph'));

paragraphs[0].style.color = 'red';

//paragraphs.map((paragraph)=>paragraph.style.color='green');

//paragraphsSpread.map((paragraph)=>paragraph.style.color='green');

paragraphsArray.map((paragraph)=>paragraph.style.color='blue');

console.log(paragraphsSpread);