/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor

let nombre = "Javier"
if (nombre == "Javier") {
    console.log(nombre)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let usuario = "Javier"
let password = "lotto"

if (usuario == "Javier" && password == "lotto") {
    console.log("Login correcto")
} else {
    console.log("Login incorrecto")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let num = 0

if (num > 0) {
    console.log('El número es positivo')
} else if (num < 0) {
    console.log('El número es negativo')
} else {
    console.log('El número es 0')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let edad = 10

if (edad >= 18) {
    console.log('El ciudadano tiene edad para votar.')
} else {
    console.log('El ciudadano es menor de edad y le quedan ' + (18 - edad) + ' años para votar.')
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

edad = 17
let esMayorEdad = edad >= 18 ? true : false
console.log(esMayorEdad)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 🌸 Primavera
// ➡️ Marzo, Abril, Mayo
// 	•	Empieza alrededor del 20-21 de marzo
// 	•	Termina alrededor del 20-21 de junio

// ☀️ Verano
// ➡️ Junio, Julio, Agosto
// 	•	Empieza alrededor del 21 de junio
// 	•	Termina alrededor del 22-23 de septiembre

// 🍁 Otoño
// ➡️ Septiembre, Octubre, Noviembre
// 	•	Empieza alrededor del 22-23 de septiembre
// 	•	Termina alrededor del 21-22 de diciembre

// ❄️ Invierno
// ➡️ Diciembre, Enero, Febrero
// 	•	Empieza alrededor del 21-22 de diciembre
// 	•	Termina alrededor del 20-21 de marzo
let mes = 6

if (mes >= 3 && mes <= 5) {
    console.log("Primavera")
} else if (mes >= 6 && mes <= 8) {
    console.log("Verano")
} else if (mes >= 9 && mes <= 11) {
    console.log("Otoño")
} else if (mes == 12 || (mes >= 1 && mes <= 2)) {
    console.log("Invierno")
} else {
    console.log("Mes no válido")
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// 	•	Enero – 31
// 	•	Febrero – 28 (29 si es año bisiesto)
// 	•	Marzo – 31
// 	•	Abril – 30
// 	•	Mayo – 31
// 	•	Junio – 30
// 	•	Julio – 31
// 	•	Agosto – 31
// 	•	Septiembre – 30
// 	•	Octubre – 31
// 	•	Noviembre – 30
// 	•	Diciembre – 313

if ([1, 3, 5, 7, 8, 10].includes(mes)) {
    console.log("Mes de 31 días")
} else if ([4, 6, 9, 11]) {
    console.log("Mes de 30 días")
} else if (mes == 2) {
    console.log("Mes de 28 días")
} else {
    console.log("Mes no válido")
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let idioma = "Japonés"

switch (idioma) {
    case "Español":
        console.log("Hola")
        break
    case "Inglés":
        console.log("Hello")
        break
    case "Francés":
        console.log("Bonjour")
        break
    case "Alemán":
        console.log("Guten Tag")
        break
    case "Japonés":
        console.log("Konnichiwa")
        break
    default:
        console.log("No te saludo")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes = 11
switch (mes) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
        break
    case 12:
    case 1:
    case 2:
        console.log("Invierno")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    console.log("Este mes tiene 31 días");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log("Este mes tiene 30 días");
    break;
  case 2:
    console.log("Este mes tiene 28 o 29 días");
    break;
  default:
    console.log("Mes no válido");
}