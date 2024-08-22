let contador = 0
const pContador = document.getElementById('counter')
let btnAdiciona = document.getElementById('increment')
let btnTira = document.getElementById('decrement')
let btnReset = document.getElementById('reset')

function atualizaContador() {
    pContador.textContent = contador
}

btnAdiciona.addEventListener('click', function() {
    contador++
    atualizaContador()
} )

btnTira.addEventListener('click', function() {
    contador--
    atualizaContador()
})

btnReset.addEventListener('click', function(){
    contador = 0
    atualizaContador()
})