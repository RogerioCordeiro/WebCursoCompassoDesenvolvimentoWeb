let randomNumber = Math.floor(Math.random() * 100)
let tries = 0

function checkGuess() {
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    tries++
    if (guess == randomNumber) {
        message.innerHTML = `Congratulations, you guessed the number in ${tries}!`
        message.style.color = 'green'
    }
    else if (guess < randomNumber){
        message.innerHTML = 'Too low. Try again!'
        message.style.color = 'orange'
    }
    else {
        message.innerHTML = 'Too high. Try again!'
        message.style.color = 'red'
    }
}
