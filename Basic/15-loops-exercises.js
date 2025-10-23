/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for (let i = 1; i <= 20; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado

let suma = 0
for (let i = 1; i <= 100; i++) {
    suma += i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50

for (let i = 1; i <= 50; i++) {
    // !(i % 2) ? console.log(i) : null     // método elegante
    if (!(i % 2)) console.log(i)            // también sirve
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola

let array = ["Javier", "Patricia", "Sofía", "Irati"]

// for(let valor of array) {
//     console.log(valor)
// }

array.forEach(valor => console.log(valor)); // Más elegante

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto

let cadena = "cadena"
let vocales = new Set(['a', 'e', 'i', 'o', 'u'])
suma = 0
for (let i = 0; i < cadena.length; i++) {
    if (vocales.has(cadena[i])) suma++;
}
console.log(`La cadena "${cadena}" tiene ${suma} vocales`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto

array = [1, 2, 3, 4, 5]
let producto = 1
array.forEach(valor => producto *= valor)
console.log(producto)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

let i = 1
do {
    console.log(5 * i++)
} while (i <= 10)

// 8. Usa un bucle para invertir una cadena de texto

cadena = "cadena"
let cadenaInvertida = ""
i = cadena.length - 1
while (i >= 0) {
    cadenaInvertida += cadena[i--]
}
console.log(cadenaInvertida)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
// La secuencia de Fibonacci es una lista de números donde cada número es la suma de los dos anteriores.
// Cada número “n” es igual a la suma del anterior (n-1) más el que está antes de ese (n-2).

// •	0
// •	1
// •	0 + 1 = 1
// •	1 + 1 = 2
// •	1 + 2 = 3
// •	2 + 3 = 5

let n1 = 0
let n2 = 1
let n = 0

for (let i = 0; i < 10; i++) {
    console.log(n1)
    n = n1 + n2
    n1 = n2
    n2 = n
}

// Con desestructuración (la mejor forma aquí)

n1 = 0, n2 = 1

for (let i = 0; i < 10; i++) {
  console.log(n1)
  [n1, n2] = [n2, n1 + n2]
}

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10

array = [5, 34, 2, 22, 4, 54, 21]
array.forEach(valor => (valor > 10) ? console.log(valor) : null);