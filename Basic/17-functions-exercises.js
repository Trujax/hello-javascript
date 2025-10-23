/*
Clase 32 - Ejercicios: Funciones
Vídeo: https://youtu.be/1glVfFxj8a4?t=14146
*/

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma

function sumar(a, b) {
    return a + b
}
console.log(sumar(5, 5))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function maximo(array) {
    return Math.max(...array)
}
let array = [0, 10, 2]
console.log(maximo(array))

// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
function vocales(string) {
    const vocales = 'aeiouAEIOUáéíóúÁÉÍÓÚ'
    let suma = 0
    for (let letra of string) {
        (vocales.includes(letra)) ? suma++ : null
    }
    return suma
}
console.log(vocales("aeiouborriquitocomotu"))

// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function aMayusculas(array) {
    let nuevoArray = []
    for (let cadena of array) {
        nuevoArray.push(cadena.toUpperCase())
    }
    return nuevoArray
}
console.log(aMayusculas(["javier", "patricia"]))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(n) {
    if (n <= 1) return false;        // 0, 1 y negativos no son primos
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false; // si tiene divisor, no es primo
    }
    return true;                     // si no tiene divisores, es primo
}
console.log(esPrimo(6))

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

// function comunes(array1, array2) {
//     let array3 = []
//     for(let i = 0; i < array1.length; i++) {
//         for(let k = 0; k < array2.length; k++) {
//             if(array1[i] == array2[k]) array3.push(array1[i])
//         }
//     }
//     return array3
// }

// Mejorado
function comunes(array1, array2) {
    return array1.filter(valor => array2.includes(valor));
}

let array1 = ["peras", "naranjas", "plátanos", "sandías", "kiwis"]
let array2 = ["melones", "uvas", "naranjas", "manzanas", "peras"]
console.log(comunes(array1, array2))

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

// function sumaPares(array) {
//     let suma = 0
//     array.forEach(element => {
//         if (element % 2 === 0) suma += element
//     });
//     return suma;
// }

function sumaPares(array) {     // más moderno
    return array
        .filter(n => n % 2 === 0)   // deja solo los pares
        .reduce((acc, n) => acc + n, 0); // los suma
}
console.log(sumaPares([3, 5, 2, 1, 4]))

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

// function cuadrados(array) {
//     let cuadrados = []
//     array.forEach(element => {
//         cuadrados.push(element**2)
//     });
//     return cuadrados
// }

function cuadrados(array) {
    return array.map(n => n ** 2);
}
console.log(cuadrados([1, 2, 3, 4, 5]))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function reverseWords(string) {
  let palabra = "";
  let resultado = "";

  // Recorremos el string de derecha a izquierda
  for (let i = string.length - 1; i >= 0; i--) {
    const caracter = string[i];

    if (caracter === " " || i === 0) {
      // Si encontramos un espacio o llegamos al principio, añadimos la palabra encontrada
      if (i === 0) palabra = caracter + palabra; // incluir la primera letra
      resultado += (resultado ? " " : "") + palabra.trim();
      palabra = "";
    } else {
      palabra = caracter + palabra; // construimos la palabra hacia atrás
    }
  }

  return resultado.trim();
}

console.log(reverseWords("Hola quiero devolver esto al revés"));

// 10. Crea una función que calcule el factorial de un número dado

// function factorial(entero) {
//     let facto = 1;
//     for(let i = 1; i <= entero; i++) {
//         facto *= i
//     }
//     return facto
// }

// Con recursividad
// function factorial(n) {
//   if (n < 0) return undefined;
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// }

// Con recursividad y ternarios
const factorial = n => n < 0 ? undefined : n <= 1 ? 1 : n * factorial(n - 1);

console.log(factorial(4))