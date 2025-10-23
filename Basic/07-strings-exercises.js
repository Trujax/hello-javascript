/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto

console.log("HOLA " + "que tal")

// 2. Muestra la longitud de una cadena de texto

let cad = "hola"
console.log(cad.length)

// 3. Muestra el primer y último carácter de un string
console.log(cad[0])
console.log(cad[cad.length-1])

// 4. Convierte a mayúsculas y minúsculas un string

console.log(cad.toUpperCase())
console.log(cad.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
console.log(`Hola
    que 
    tal`)

// 6. Interpola el valor de una variable en un string

console.log(`La variable cad es igual a ${cad}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

cad = "Hola que tal"
console.log(cad.replaceAll(' ', '-'))


// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(cad.includes('que'))

// 9. Comprueba si dos strings son iguales

cad = "hola"
let cad2 = "hola"
console.log(cad == cad2)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(cad.length == cad2.length)