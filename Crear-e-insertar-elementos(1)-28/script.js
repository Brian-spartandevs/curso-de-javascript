// Dom - Crear e insertar elementos
/* 
crear un elemento: element.createElement(element)
Escribir texto en un elemento: element.textContent = texto
Escribir HTML en un elemento: element.innerHTML = codigo HTML

añadir un elemento al DOM: parent.appendChild(element)

fragmentos de codigo: document.createDocumentFragment()
*/

const days = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

const title = document.getElementById('title')
const daysList = document.getElementById('daysList')
const daysSelect = document.getElementById('daysSelect')

/* const itemList = document.createElement('li')
itemList.textContent = 'Lunes'

daysList.appendChild(itemList); */

title.innerHTML = 'Dom - <span>Crear e insertar elementos I</span>'

const fragment = document.createDocumentFragment()

/* for(const day of days){
    const itemList = document.createElement('li')
    itemList.textContent = day
    daysList.appendChild(itemList)
} */

/* for(const day of days){
    daysList.innerHTML += `<li>${day}</li>`
} */

for(const day of days){
    const itemList = document.createElement('li')
    itemList.textContent = day
    fragment.appendChild(itemList)
} 

daysList.appendChild(fragment)



for(const day of days){
    const selectItem = document.createElement('option')
    selectItem.setAttribute('value', day.toLowerCase)
    selectItem.textContent = day
    fragment.appendChild(selectItem)
}

daysSelect.appendChild(fragment)
