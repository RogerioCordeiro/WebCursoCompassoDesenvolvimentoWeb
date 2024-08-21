let a = 10
let b = 5
let c = 2

let resultado = a > b || a > c
console.log(resultado)

// Comparadores logicos
// && = operador E um e o outro são verdadeiros V E V
// || = operador OU um ou outro são verdadeiros V OU F


let idade = parseInt(prompt('Digite a seu idade: '))
let temTitulo = prompt('Tem titulo de eleitor? (sim/não)')
let idadeMinima = 16

if(idade >= idadeMinima && temTitulo == 'sim'){
    console.log('Você pode votar :) <3')
}
else if(idade >= idadeMinima && temTitulo == 'não') {
    console.log('Você precisa de um titulo para votar :( ')
}
else if (idade < idadeMinima && temTitulo == 'não'){
    console.log('Você não tem idade para votar.')
}