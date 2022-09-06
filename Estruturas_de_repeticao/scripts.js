// ESTRUTURAS DE REPETIÇÃO

// FOR
// BREAK - para a execução do loop
//CONTINUE - pula a execução do momento
// crecente
// for(let i = 0; i < 10; i++ ){
//    console.log(i)
//}
// decrecente
// for(let i = 100; i > 0; i--) {
//     console.log(i)
// }
// Exemplo de brack:
// for(let i = 10; i > 0; i--){
//     if(i === 5){
//         break;
//     }
//    console.log(i)
// }

// Exemplo de continue:
// for(let i = 10; i > 0; i--){
//     if(i === 5) {
//         continue;
//     }
//     console.log(i)
// }


// WHILE (ENQUANTO) fazer uso do while faz sentido quando a gente não sabe quando vai parar a aplicação
// let i = 0;
// while(i < 10){
//     console.log(i)

//     i++;
// }


// FOR...OF

// let name = 'Andrea'
// let names = ['Ana', 'Laura', 'Alicia']

//Com array pegando cada elemento
    // for(let name of names) {
    //     console.log(name)
    // }
//Com cadeia de caracteres
    // for(let char of name) {
    //     console.log(char)
    // }


    // FOR..IN (vai criar um loop encima de um objeto)
//     let person = {
//         name: 'Andrea',
//         age: 21,
//         weight: 70
//     }

//     for(let property in person){
//     console.log(property)
//     console.log(person[property])
// }