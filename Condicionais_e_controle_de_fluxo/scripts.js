// IF...ELSE

// let temperature = 36.5

// if(temperature >= 37.5) {
//  console.log('febre alta')
// } else if (temperature < 37.5 && temperature >= 37){
// console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }


// SWITCH

//Exemplo 1:

// let expression = 'b'

// switch (expression) {
//   case 'a':
    // código
//     console.log('a')
//      break
//   case 'b':
    // código para expression b
    // console.log('b')
    // break

    // default:
    //     console.log('default')
    //     break

//}

//Exemplo 2:
// function calculate(number1, operator, number2){
// let result = 0;
  
// switch (operator) {
//     case "+":
//         result = number1 + number2
//         break
//     case "-":
//         result = number1 - number2
//         break
//     case "*":
//         result = number1 * number2
//         break
//     case "/":
//         result = number1 / number2
//         break
//     default:
//         console.log('não implementado')
//         break
// }
// return result
// }

// console.log(calculate (4, '-', 8))

//THROW significa disparar, lançar

// function sayMyName(name = ''){
// if(name === '') {
//     throw "Nome é necessário"
// }
// console.log(name)
// }

// TRY..CATCH try significa tentar e catch significa pegar

// try {
// sayMyName('Andrea')
// } catch(e) {
//  console.log(e)
// }

// console.log('após ao try/catch')