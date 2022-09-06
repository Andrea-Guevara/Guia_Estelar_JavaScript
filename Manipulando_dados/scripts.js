// MANIPULANDO STRINGS E NÚMEROS

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

// let number = 28298399.888
// toFixed: Função atrelada ao objeto number também é chamado de método 
// console.log(number.toFixed(2).replace(".",","))

//MANIPULANDO LETRAS MINÚSCULAS EM MAIÚSCULAS E AO CONTRARIO
// let word = "Programar é muito bacana!"
// console.log(word.toUpperCase())
// console.log(word.toLowerCase())

//MANIPULANDO STRINGS E ARRAYS:
//Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

// let phrase = "Eu quero viver o amor!"
// let myArray = phrase.split(" ")
// let phraseWithUnderscore = myArray.join("_")
// console.log(phraseWithUnderscore, myArray)

//VERIFICAR SE O TEXTO CONTÉM A PALAVRA AMOR
// Boolean
// let phrase = "Eu quero viver o amor!"
// console.log(phrase.includes("Amor"))

// CRIAR ARRAY COM CONSTRUTOR
// let myArray = new Array('a', 'b', 'c')
// console.log(myArray)

//CONTAR ELEMENTOS DE UM ARRAY
// console.log(["a" , "b" , "c"].length)

//TRANSFOMAR UMA CADEIA DE CARACTERES EM ELEMENTOS DE UM ARRAY
// let word = "manipulação"
// console.log(Array.from(word))

// MANIPULANDO ARRAYS
// let techs = ["html" , "css" , "js"]
// adicionar um item no fim
// techs.push("node.js")
// adicionar no começo
// techs.unshift("sql")
// remover do fim
// techs.pop()
// remover do começo
// techs.shift()
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 2))
// remover um ou mais items em qualquer posição do array
// techs.splice(1, 2)
// encontar a posição de um elemento no array
// let index = techs.indexOf('css')
// techs.splice(index, 1)
// console.log(index)
// console.log(techs)