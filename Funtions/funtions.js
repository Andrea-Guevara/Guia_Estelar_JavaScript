// FUNCTION EXPRESSION
// FUNCTION ANONYMOUS

// PARÂMETROS (parameters)
//const sum = function(number1, number2) {
// console.log(number1 + number2)
//}
//sum(1, 2) // arguments - argumentos
//sum(3, 5)
//sum(40, 40)

// APRENDENDO OUTRO JEITO DE FAZER!
//  const sum = function(number1, number2) {
//     total = number1 + number2
//     return total
//  }

//  let number1 = 34
//  let number2 = 25

//  console.log(`O número 1 é ${number1}`)
//  console.log(`O número 2 é ${number2}`)
//  console.log(`A soma é ${sum(number1, number2)}`)

// EXEMPLO PRÁTICO
// Função é um liquidificador 
// function fazerSuco(fruta1, fruta2) {
//   return fruta1 + fruta2
// }
// const copo = fazerSuco('Morango', 'Maçã')
// console.log(copo)


//FUNCTION SCOPE

// let subject = 'create video'
// function createThink(subject){
//     subject = 'study'
//     return subject
// }
// console.log(createThink(subject))
// console.log(subject)

// FUNCTION HOISTING

// sayMyName();

// function sayMyName() {
//     console.log('Mayk')
// }

//Arrow function

// const sayMyName = (name) => {
//     console.log(name)
// }
// sayMyName('Andrea')

// CALLBACK FUNCTION (Chamar de volta!)

// function sayMyName(name) {
//     console.log('antes de executar a função callback')
//     name()
//     console.log('depois de executar a callback')
// }
// sayMyName(
//     () => {
//         console.log('estou em uma função callback')
//     }
// )

/*
 FUNCTION() construtor
 * expressão new
 * criar um novo objeto
 * this keyword
*/ 

// function Person(name) {
//  this.name = name
//  this.walk = function() {
//     return this.name + " está andando"
//  }
// }
// const andrea = new Person("Andrea")
// const monica = new Person("Monica")
// console.log(andrea.walk())
// console.log(monica.walk())