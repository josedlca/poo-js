// declaracion de clase
// class Persona{
//     constructor(nombre,  apellido){
//         this.personaNombre = nombre
//         this.personaApellido = apellido
//     }
// }

// console.log(Persona.name)

// expresiones de clase
// anonima
// let Carro = class{
//     constructor( placa, color){
//         this.carroPlaca = placa
//         this.carroColor = color
//     }
// }

// console.log(Carro.name)

// // nombrada
// let MyClass = class Myclassname {
//     constructor(testOne, testTwo){
//         this.firstAtribute = testOne
//         this.secondAtribute = testTwo
//     }
// }

// console.log(MyClass.name)

// metodo prototipo
// class Otaku{
//     constructor(persona, nombre){
//         this.persona = persona
//         this.nombre = nombre
//     }

//     get otakuName(){
//         return this.ourOtaku()
//     }

//     ourOtaku(){
//         return `${this.persona} ${this.nombre}`
//     }
// }

// let nombraOtakus = new Otaku('gordo', 'Jose');

// console.log(nombraOtakus.otakuName)

// metodo estatico
// class Peluche {
//     constructor (tamano, peso){
//         this.tamano = tamano
//         this.peso = peso 
//     }

//     static pelucheGordo (nombre, apelativo){
        // puedes ingresar y trabajar esos objetos
//         let nombrePeluche = `${nombre.tamano} ${apelativo.tamano}`
//         return nombrePeluche
//     }
// }

// let barney = new Peluche(1.5, 20)
// let gardfield = new Peluche(2.5, 20)
// let bubu = new Peluche('no', 'funciona')
// esto recibe objetos\
// static no puede ser llamado desde una instacia de clase
// console.log(Peluche.pelucheGordo(barney, gardfield))

// class Animal {
//     constructor(nombre){
//         this.nombre = nombre
//     }

//     get howTalk(){
//         return this.hablar()
//     }

//     hablar(){
//         return this.nombre + 'hace ruido';
//     }
// }

// class Gato extends Animal {
//     newPet(){
//         return this.nombre
//     }
// }

// let myPet = new Gato('cholon')
// let myBigPet = new Animal('chula')

// console.log(myBigPet.howTalk)
// console.log(myPet.newPet())
// console.log(myPet.nombre)
// console.log(myPet.howTalk)


class Cuenta {
    constructor(titular, cantidad){
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(ingreso){
        if(ingreso < 0){
            return `ingresaste negativos viejo , sigues igual ${this.cantidad} soles ${this.titular}`
        }else{
            this.cantidad = this.cantidad + ingreso
            return `ooh! tu cuenta aumento a ${this.cantidad} soles ${this.titular}`
        }
    }

    retirar(retiro){
        let residuo = this.cantidad - retiro
        if( residuo < 0){
            this.cantidad = 0
            return `Rayos te quedaste sin fondos ${this.cantidad} soles ${this.titular}`
        }else{
            this.cantidad = residuo
            return `Hey aun te queda para comer esta semana ${this.cantidad} soles ${this.titular}`
        }
    }

}

let cuentaOne = new Cuenta('jose', 400)
let cuentaTwo = new Cuenta('Armando', 800)

console.log(cuentaOne.ingresar(400))
console.log(cuentaOne.retirar(900))

console.log(cuentaTwo.ingresar(400))
console.log(cuentaTwo.retirar(300))

// class Persona {
//     constructor(nombre, edad, DNI, sexo, peso, altura){
//         this.nombre = nombre
//         this.edad = edad
//         this.DNI = DNI
//         this.sexo = sexo
//         this.peso = peso
//         this.altura = altura
//     }

//     calculaIMC(){
//         let IMC = this.peso / (this.altura*this.altura)
        
//         if(IMC < 20) {
//             return -1
//         }else if(IMC >= 20 && IMC <= 25){
//             return 0
//         }else {
//             return 1
//         }
//     }

//     checkEdad(){
//         if(this.edad > 18){
//             return true
//         }else{
//             return false
//         }
//     }

//     genero(){
//         if(this.sexo == 'H'){
//             return 'correcto'
//         }else{
//             return 'incorrecto'
//         }
//     }

//     dniMaker(){
//         let theDni = Math.floor(Math.random() * (10000000 - 99999999)) + 10000000;
//         return theDni
//     }
// }

// let theName = prompt('Introduce tu nombre')
// let 