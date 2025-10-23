/*
Clase 36 - Ejercicios: Desestructuración y propagación
Vídeo: https://youtu.be/1glVfFxj8a4?t=16802
*/

// 1. Usa desestructuración para extraer los dos primeros elementos de un array 

let array = [1, 2, 3, 4, 5]
let [a0, a1] = array

console.log(a0, a1)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable

let [b0, b1, b2, b3, b4, b5 = 6] = array
console.log(b0, b1, b2, b3, b4, b5)

// 3. Usa desestructuración para extraer dos propiedades de un objeto

let persona = {
    nombre: "Javier",
    edad: 48
}

let { nombre, edad } = persona
console.log(nombre + " " + edad)

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes

let { nombre: personName, edad: age } = persona
console.log(personName + " " + age)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado

let gato = {
    nombre: "Tucson",
    color: "amarillo",
    amigo: {
        nombre: "Chinín",
        color: "amarillo y blanco"
    }
}

let { nombre: catName, amigo: { nombre: friendName } } = gato
console.log(catName + " " + friendName)

// 6. Usa propagación para combinar dos arrays en uno nuevo

array = [1, 2, 3]
let array2 = [4, 5, 6]
let array3 = [...array, ...array2]
console.log(array3)

// 7. Usa propagación para crear una copia de un array

array2 = [...array]
console.log(array2)

// 8. Usa propagación para combinar dos objetos en uno nuevo

let objeto1 = {
    nombre: "Javier",
    edad: 48
}

let objeto2 = {
    puesto: "junior",
    empresa: "Green software"
}

let objeto3 = { ...objeto1, ...objeto2 }
console.log(objeto3)

// 9. Usa propagación para crear una copia de un objeto

let objeto4 = { ...objeto1 }
console.log(objeto4)

// 10. Combina desestructuración y propagación

const numeros = [1, 2, 3, 4, 5, 6]

// Desestructuramos los dos primeros y usamos propagación para el resto
const [primero, segundo, ...resto] = numeros

console.log(primero) // 👉 1
console.log(segundo) // 👉 2
console.log(resto)  // 👉 [3, 4, 5, 6]