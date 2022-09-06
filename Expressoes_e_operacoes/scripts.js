/* Expressões e Operadores
- Expressions
- Operators
  Binary
  Unary
  Ternary */

//   let number = 1;
  //OPERADORES + * / -
  //binary:
//   console.log(number + 1)
  //unary: operador na frente para incrementar
//   console.log(++number)
  //ternary
//   console.log(false ? 'alo' : 'nada')


//OPERADORES ARITMÉTICOS:
// multiplicação *
// console.log(3.2 * 5)
// divisão /
// console.log(12 / 2)
// soma +
// console.log(34 + 67)
// subtração -
// console.log(34 - 23)


// resto da divisão % mostra o restante da divisão
// let remainder
// remainder = 11 % 3
// console.log(remainder)
// incremento ++
// let increment = 0
// increment++
// console.log(increment)
// decremento --
// let decremet = 0
// console.log(--decremet)
// exponencial **
// console.log(3 ** 3)


// GROUPING OPERATOR ( ) operador que agrupa expressões
// let total = (2 + 3) * 5
// console.log(total)


//OPERADORES DE COMPARAÇÃO
//Irá comparar valores e retornar um boolean como resposta à comparação

// let one = 1
// let two = 2

// == igual a
// console.log(two == 1)
// console.log(one == "1")

// != diferente de
// console.log(one != two)
// console.log(one != 1)
// console.log(one != "1")


// OPERADORES DE COMPARAÇÃO ESTRITAMENTE IGUAL E ESTRITAMENTE DIFERENTE
//  let one = 1
//  let two = 2

 // === estritamente igual a 
//  console.log( one === "1")
//  console.log( one === 1)

 // !== estritamente diferente de 
 //influencia muito a direfença entre tipos!!
//  console.log(two !== "2")
//  console.log(two !== 2)


//OPERADORES DE COMPARAÇÃO MAIOR E MENOR (IGUAL)

// let one = 1
// let two = 2

// > Maior que
// console.log( one > two )

// >= Maior igual a
// console.log( one >= 1 )
// console.log( two >= 1 )

// < Menor que
// console.log( one < two )

// <= Menor igual a 
// console.log( one <= two )
// console.log( one<= 1 )
// console.log( one <= 0 )

//OPERADORES DE ATRIBUIÇÃO (ASSIGNMENT)
// let x

//assignment
// x = 1

//addition assignment
// x = x + 2
// x += 2

//subtraction assignment
// x = x - 1
// x -= 1

//multiplication assignment
// x = x * 2
// x *= 2

//division assignment
// x = x / 2
// x /= 2

//remainder, exponetiation
// x %= 2
// x **= 2

// console.log(x)


//OPERADORES LÓGICOS (LOGICAL OPERATORS)
// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

// let pao = false
// let queijo = true

// AND &&
// console.log(pao && queijo)

// OR ||
// console.log(pao || queijo)

// NOT ! operador de negação se o pao for false e eu nego ele, ele vira true
// console.log(!pao)

//OPERADOR CONDICIONAL (TERNÁRIO)
//Dependendo da condição, nós receberemos valores diferentes

//Condição então valor 1 se não valor 2
//Condition ? value1 : value2

//Exemplos:
//Café da manhã top
// let pao = true
// let queijo = false
// const niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim'
// niceBreakfast = Bom café da manhã
// console.log(niceBreakfast)

// Maior de 18

// let age = 16
// const canDrive = age >= 18 ? 'can drive' : "cannot drive"
// console.log(canDrive)


//OPERADOR DE STRING (STRING OPERATOR)
// comparison (comparação)
// console.log( 'a' == 'a')
//concatenation (concatenação)
//Retorna a união de duas Strings
// let alpha = 'alpha'
// console.log( alpha + 'bet' + 's')


// TYPE CONVERSION (TYPECASTING) VS TYPE COERSION
// console.log(Number('9') + 5)

/* FALSY 
 Quando um valor é considerado false em contextos onde
 um boolean é obrigatório ( condicionais e loops )

 false
 0
 -0
 ""
 null
 undefined
 NaN
*/
// console.log(undefined ? 'verdadeiro' : 'false' )

/*TRUTHY 
  Quando um valor é considerado true em contextos onde
  um boolean é obrigatório ( condicionais e loops )
  
  true
  {}
  []
  1
  3.23
  "0"
  "false"
  -1
  Infinity
  -Infinity
*/ 


/* OPERATOR PRECEDENCE
   PRECEDÊNCIA DE OPERADORES

 * grouping                     ( )
 * negação e incremento         ! ++ --
 * multiplicação de divisão     * /
 * adição e subtração           + -
 * relacional                   < <= > >=c
 * igualdade                    == != === !==
 * AND                          &&
 * OR                           ||
 * condicional                  ?:
 * assignment (atribuição)      = += -= *= %=
 
 */