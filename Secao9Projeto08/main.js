let age = 110

if (age >= 18) {
    console.log("você é um adulto!")
}
else if (age >= 15) {
    console.log("Você é um adolecente!")
}
else {
    console.log("Você é uma criança!")
}
// Boas praticas sempre adcionar um else. 

let grade = parseFloat(prompt('Digite a nota do aluno: '))

if (grade > 100){
    alert('Nota invalida!')
}
else if (grade >= 90) {
    alert( 'Aluno nota A')
}
else if (grade >= 80) {
    alert('Aluno nota B')
}
else if (grade >= 70){
    alert('Aluno nota C')
}
else if (grade >= 60){
    alert('Aluno nota D')
}
else {
    alert('Aluno nota F')
}