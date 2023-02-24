/* Programacion Orientada a objetos */

/* Es un paradigma de la programacion que acualiza la forma de programar anterior 
Algunos conceptos fundamentales son:
-clases
-herencia
-objetos
-metodos
-evento
-etc..
*/

// Clases - Propiedades

/* son plantillas que se uilizan para crear objetos iguales

cuando creamos un objeto, a esa accion se le llama INSTANCIAR un objeto

necesitamos una funcion constructora. Se tiene que llamar constructor y se ejecuta cada vez que creemos un objeto */

/* class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
} */

/* this hace referencia al objeto 

nombre del objeto = nombre del parametro
apellido del objeto = apellido del parametro
edad del objeto = edad del parametro

se le puede asignar propiedades que no hay en los parametros, pero siempre utilizando this para referenciar al objeto 

this.datos = `${nombre} ${apellido} ${edad}`

*/

//clases - metodos

/*  Los obejtos pueden tener funciones asociadas a el. En ese caso se les denomina metodos

saludar(){
    return ``Hola, me llamos ${this.nombre} y tengo ${this.edad} años`
}

*/

// crear objetos

/* Para crear un objeto utilizando una clase se hace con la palabra reservada new y el nombre de la clase que queremos utilizar

const juan = new persona ('juan', 'garcia', 23)

una vez este instanciado el objeto podremos acceder a sus porpiedades y metodos utilizando la nomenclatura del punto o buscando su propiedad en el objeto.

juan.nombre
juan.apellido
juan.edad
juan.datos
juan.saludar()

juan['nombre']
juan['apellido']
juan['edad']
juan['datos']
juan['saludar']()

*/

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    }

    saludar(){
        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años.`
    }
}

const juan = new Persona('Juan', 'Garcia', 25);
const marta = new Persona('Marta', 'Garcia', 35);

console.log(juan);

console.log(juan.saludar());