// Aula 52 objetos 
let a = 5.2

let result = Math.round(a)
console.log(result)

result = Math.ceil(a)
console.log(result)

result = Math.floor(a)
console.log(result)

let b = [5, 3, 7, 1, 9]
result = Math.max(...b)
console.log(result)

result = Math.min(...b)
console.log(result)

result = Math.random()
console.log(result)

result = Math.floor(Math.random() * 100)
console.log(result)

function changeBackgroundColor() {
    let colors = ['red', 'green', 'yellow', 'blue', 'orange', 'pink', 'chartreuse']
    let randomColor = colors[Math.floor(Math.random() * colors.length)]
    console.log(Math.floor(Math.random() * colors.length))
    document.body.style.backgroundColor = randomColor
}