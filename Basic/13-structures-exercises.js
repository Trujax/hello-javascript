/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animal = ['perro', 'gato', 'elefante', 'conejo', 'oso']

// 2. Añade dos más. Uno al principio y otro al final

animal.unshift("cerdo")
animal.push("gallina")
console.log(animal)

// 3. Elimina el que se encuentra en tercera posición

animal.splice(2, 1)
console.log(animal)

// 4. Crea un set que almacene cinco libros

let miSet = new Set(["El Silmarillion", "El Hobbit", "El señor de los anillos", "Las dos torres", "El retorno del rey"])

// 5. Añade dos más. Uno de ellos repetido

miSet.add("Cuentos")
// No se puede repeetir
console.log(miSet)

// 6. Elimina uno concreto a tu elección

miSet.delete("Cuentos")
console.log(miSet)

// 7. Crea un mapa que asocie el número del mes a su nombre

let miMapa = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"],
    [6, "Junio"],
    [7, "Julio"],
    [8, "Agosto"],
    [9, "Septiembre"],
    [10, "Octubre"],
    [11, "Noviembre"],
    [12, "Diciembre"]
])

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

miMapa.has(5) ? console.log(miMapa.get(5)) : console.log("No existe")

// 9. Añade al mapa una clave con un array que almacene los meses de verano

miMapa.set("verano", ["junio", "julio", "agosto"])
console.log(miMapa)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map

let miArray = [1, 2, 3, 4, 5]
console.log(miArray)
console.log(Object.prototype.toString.call (miArray))

miSet = new Set(miArray)
console.log(miSet)
console.log(Object.prototype.toString.call (miSet))

miMapa = new Map()
miMapa.set("Set", miSet)
console.log(miMapa)
console.log(Object.prototype.toString.call(miMapa))
