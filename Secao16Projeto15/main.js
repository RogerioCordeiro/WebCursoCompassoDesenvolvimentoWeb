let numberList = document.getElementById('numberList') 

for (i = 1; i <= 10; i++) {
    let listItem = document.createElement('li')
    listItem.textContent = 'Item ' + i
    numberList.appendChild(listItem)
}

// Minha Solução
let  listFruit = document.getElementById('listFruit')

let fruits = ["Maça", "Pera", "Morango", "Uva", "Banana"]

for (i = 0; i < fruits.length; i++){
    let fruitList = document.createElement('li')
    fruitList.textContent = fruits[i]
    listFruit.appendChild(fruitList)
}
// Solução da aula
numberList = document.getElementById('fruitsList') 
for (i = 0; i < 5; i++) {
    let listItem = document.createElement('li')
    listItem.appendChild(document.createTextNode(fruits[i]))
    numberList.appendChild(listItem)
}
