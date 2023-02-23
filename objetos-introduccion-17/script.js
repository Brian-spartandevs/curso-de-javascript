/* Introduccion a objetos */

/* Un objeto es una estructura de datos que representa propiedades, valores y acciones que puede realizar el objeto. Todos los objetos tienen porpiedades o atributos  comportamientos o acciones representados por pares de claves (key) : valor (value)
Para acceder a las propiedades o acciones del obejto se utiliza la nomenclatura del punto
*/

const person = {
    name: 'Juan',
    age: 26,
    sons: ['Laura', 'Diego', 'Pepe', 'Rosa', 'Thomas']
}

/* console.log(person);
console.log(person.name);
console.log(person['name']); */

/* for(const key in person){
    console.log(person[key]);
} */

/* for(const son of person.sons){
    console.log(son);
} */

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman ${person.sons.join(', ')} `);