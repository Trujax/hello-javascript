/*
Clase 34 - Ejercicios: Objetos
Vídeo: https://youtu.be/1glVfFxj8a4?t=15675
*/

// 1. Crea un objeto con 3 propiedades
let persona = {
    nombre: "Javier",
    apellido: "Suárez",
    edad: 48
}

// 2. Accede y muestra su valor

console.log(persona)

// 3. Agrega una nueva propiedad

persona.email = "Trujax"
console.log(persona)

// 4. Elimina una de las 3 primeras propiedades

delete persona.apellido
console.log(persona)

// 5. Agrega una función e invócala

persona.mostrarNombre = function () {
    console.log(this.nombre+"!")
}
persona.mostrarNombre()

// 6. Itera las propiedades del objeto

for (let i in persona) {
    console.log(persona[i])
}

// 7. Crea un objeto anidado

let gato = {
    nombre: "Tucson",
    color: "amarillo",
    amigo: {
        nombre: "Chinín",
        color: "amarillo y blanco"
    }
}

// 8. Accede y muestra el valor de las propiedades anidadas

console.log(gato.amigo.nombre)
console.log(gato.amigo.color)

// 9. Comprueba si los dos objetos creados son iguales

let objeto1 = {
    nombre: "objeto"
}

let objeto2 = {
    nombre: "objeto"
}

console.log(objeto1 == objeto2)

// 10. Comprueba si dos propiedades diferentes son iguales

console.log(objeto1.nombre == objeto2.nombre)