/*
Clase 39 - Ejercicios: Clases
Vídeo: https://youtu.be/1glVfFxj8a4?t=18630
*/

// 1. Crea una clase que reciba dos propiedades

class Gato {
    constructor(nombre, color) {
        this.nombre = nombre,
        this.color = color
    }
    static bufar() {
        console.log("Fuuuuu")
    }
}

// 2. Añade un método a la clase que utilice las propiedades

Gato.prototype.maullar = function() {
    console.log('Miau')
}
let gato = new Gato('chinín', 'amarillo')

// 3. Muestra los valores de las propiedades e invoca a la función

console.log(gato)
gato.maullar()

// 4. Añade un método estático a la primera clase

// Hecho arriba

// 5. Haz uso del método estático

Gato.bufar()

// 6. Crea una clase que haga uso de herencia

class Peludo extends Gato {
    purr() {
        console.log('Purrrrrr')
    }
}

let pelosin = new Peludo('Tucson', 'amarillo')
console.log(pelosin)
pelosin.purr()

// 7. Crea una clase que haga uso de getters y setters

class Perro {
    #nombre
    constructor(nombre, color){
        this.#nombre = nombre,
        this.color = color
    }  
    setNombre(nombre) {
        this.#nombre = nombre
    }

    getNombre() {
        return this.#nombre
    }

    ladrar() {
        console.log('Guau')
    }
}

// 8. Modifica la clase con getters y setters para que use propiedades privadas

// hecho arriba

// 9. Utiliza los get y set y muestra sus valores

let perro = new Perro('Blacky', 'Negro')
console.log(perro)
console.log(perro.getNombre())
perro.setNombre('Bonnie')
console.log(perro.getNombre())

// 10. Sobrescribe un método de una clase que utilice herencia 

class Perrote extends Perro {
    ladrar() {
        console.log("guuf guuf")
    }
}
let perrote = new Perrote('Blacky', 'Negro')
console.log(perrote)
perrote.ladrar()