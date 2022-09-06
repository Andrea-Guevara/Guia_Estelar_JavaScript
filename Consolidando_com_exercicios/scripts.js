//EXERCICIO 1
/* ### TRANSFORMAR NOTAS ESCOLARES
Crie um algoritmo que transforme as notas do sistema 
numérico para sistema de notas em caracteres tipo ABC
  * de 90 para cima  - A
  * entre 80 - 89    - B
  * entre 70 - 79    - C
  * entre 60 - 69    - D
  * menor que 60     - F

 */
// let nota = -1;

// function getNota(nota) {
//   let notaA = nota >= 90 && nota <= 100;
//   let notaB = nota >= 80 && nota <= 89;
//   let notaC = nota >= 70 && nota <= 79;
//   let notaD = nota >= 60 && nota <= 69;
//   let notaF = nota < 60 && nota >= 0;

//   let notaFinal;

//   if (notaA) {
//     notaFinal = "A"
//   } else if (notaB) {
//     notaFinal = "B"
//   } else if (notaC) {
//     notaFinal = "C"
//   } else if (notaD) {
//     notaFinal = "D"
//   } else if (notaF) {
//     notaFinal = "F"
//   } else {
//     notaFinal = "Nota inválida"
//   }

//   return notaFinal
// }

// console.log(getNota(-1))
// console.log(getNota(60))
// console.log(getNota(100))
// console.log(getNota(50))
// console.log(getNota(80))



//EXERCICIO 2
/* ### SISTEMA DE GASTOS FAMILIAR 
crie um objeto que possuirá 2 propriedades, ambas do tipo array:
  * receitas: []
  * despesas: []

Agora, crie uma função que irá calcular o total de receitas 
e despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguindo so valor do saldo

*/

// let gastos = {
// receitas: [
//  1000, 200, 300, 400, 500.10
// ],
// despesas: [
//  100, 800, 120, 60, 100.50, 30000
// ]

// } 
// function soma(array) {
//   let total = 0;
//   for (let valor of array ) {
//     total += valor
//   }
//   return total
// }
// function calcularBalanco() {
//  const calcularReceitas = soma(gastos.receitas)
//  const calcularDespesas = soma(gastos.despesas)

//  const total = calcularReceitas - calcularDespesas

//  const saldoPositivo = total >= 0

//  let textoDoBalanco = "negativo "

//  if(saldoPositivo){
//    textoDoBalanco = "positivo"
//  }
//  console.log(`seu saldo é ${textoDoBalanco}: ${total.toFixed(2)} R$`)
// }

//calcularBalanco()



// EXERCICIO 3
/* ### CELSIUS EM FAHRENHEIT
Crie uma função que receba uma String em celsius ou 
fahrenheit e faça a transformação de uma unidade para
outra
  C = (F - 32) * 5/9
  F = C * 9/5 + 32

*/

// transformacaoDeGrau('50F)
// function transformacaoDeGrau(grau) {
//   const celsius = grau.toUpperCase().includes('C')
//   const fahrenheit = grau.toUpperCase().includes('F')

  // Fluxo de erro
  // if (!celsius && !fahrenheit) {
  //   throw new Error('Grau não identificado ')
  // }

  // Fluxo ideal, F => C
  // let degrauAtualizado = Number(grau.toUpperCase().replace("F", ""));
  // let formula = (fahrenheit) => (fahrenheit - 32) * 5 / 9
  // let novaSinal = 'C'


  // Fluxo alternativo C => F
//   if (celsius) {
//     degrauAtualizado = Number(grau.toUpperCase().replace("C", ""));
//     formula = (celsius) => (celsius * 9 / 5) + 32
//     novaSinal = 'F'
//   }

//   return formula(degrauAtualizado) + novaSinal
// }

// try {
//   console.log(transformacaoDeGrau('10c'))
//   console.log(transformacaoDeGrau('50F'))
//   transformacaoDeGrau('50Z')
// } catch (error) {
//   console.log(error.message)
// }


// EXERCICIO 4
/*
  ### Buscando e contando dados em Arrays 
  * Contar o número de categorias e o número de livros em 
    cada categoria
  * Contar o número de autores
  * Mostrar livros do autor Auguto Cury
  * Transformar a função acima em uma função que irá receber 
    o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
  {
  category: "Riqueza",
  books:[
    {
      title: "Os segredos da mente milionária",
      author: "T. Harv Eker",
    },
    {
      title: "O homem mais rico da Babilônia",
      author: "George S. Clason"
    },
    {
      title: "Pai rico, pai pobre",
      author: "Robert T. Kiyosaky e Sharon L. Lechter"
    },
 ],
},
{
  category: "Inteligência Emocional",
  books: [

    {
      title:"Você é insubstituível",
      author:"Augusto Cury",
    },
    {
      title:"Como enfrentar o mal século",
      author:"Augusto Cury",
    },
    {
      title:"Os 7 hábitos das pessoas altamente eficazes",
      author:"Stephen R. Covey",
    }
  ]
}

];

const totalCategories = booksByCategory.length
console.log(totalCategories);

for(let category of booksByCategory) {
  console.log('Total de livros da categoria:', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = [];

  for(let category of booksByCategory ) {
   for(let book of category.books){
    if(authors.indexOf(book.author) == -1){
      authors.push(book.author);
    }
   }
  }
  console.log("Total de autores: ", authors.length)
}
countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for(let category of booksByCategory) {
   for(let book of category.books){
   if(books.author === author){
    books.push(book.title)
   }
   }
  }
  console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}
booksOfAuthor('Augusto Cury');