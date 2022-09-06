//1 Declare uma variável de nome weight

//let weight

//2 Que tipo de dado é a variável acima?
//console.log(typeof weight)

/* 3 Declare uma variável e atribua valores para cada um dos dados:
     * name: String
     * age: Number (integer)
     * stars: Number (float)
     * isSubscribed: Boolean
*/

// let name = "Andrea"
// let age = 21
// let weight = 64.8
// let isSubscribed = true

//3 Que tipo de dado é o student?

// let student ={}; //object
// console.log(typeof student)

//3.1 Atribua a elas as mesmas propriedades e valores do exercício 3.
let student ={
    name : "Andrea",
    age : 21,
    weight : 64.8,
    isSubscribed : true
};

// console.log(student)

//3.2 Mostre no console a seguinte mensagem:
// <name> de idade <age> pesa <weight> Kg.

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} Kg`)

//4 Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

//5 Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 3.1

students = [
    student
]

//6 Coloque no console o valor da posição zero do Array acima

// console.log(students[0])

//7 Crie um novo student e coloque na posição 1 do Array students

const luna = {
    name : 'Luna',
    age : '8 meses',
    weight : 20,
    isSubscribed: true
}

students = [
    student,
    luna
]
console.log(students)