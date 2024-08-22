// Aula 49 funções
function greeting(name) {
    console.log('Hi ' + name)
}

greeting('Rogerio')

function sum(num1, num2){
    return num1 + num2
}

let result = sum(2, 2)

console.log(result)

// Aula 50 projeto alterar cor no html
function changeColor() {
    let titleH1 = document.getElementById('changeh1')

    // Bonus que criei para reforçar o uso de if e else dentro de funções
    if (titleH1.style.color == 'blue') {
        titleH1.style.color = 'red'
    } 
    else {
        titleH1.style.color = 'blue'
    }
}