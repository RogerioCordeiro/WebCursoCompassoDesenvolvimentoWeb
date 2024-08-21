for (let i = 0; i < 10; i++) {
    console.log(i + 1 + '. Hi')
}

let colorList = []

for (let i = 1; i <= 3; i++) {
    let userColor = prompt('Digite a ' + i + 'º cor :')
    colorList.push(userColor)
}

document.getElementById('listColor').innerHTML = colorList