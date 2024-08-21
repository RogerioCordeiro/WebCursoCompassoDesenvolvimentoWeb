let valorConta = 0
let gorjeta = 0
let valorTotal = 0


valorConta = parseFloat(prompt('Digite o valor da conta: '))
gorjeta = parseFloat(prompt('Digite a gorjeta (deciaml)%: '))

// Primeira forma de resolução
// gorjeta = (valorConta * gorjeta) / 100
// valorTotal = valorConta + gorjeta

// Segunda forma de resolução
// valorTotal += valorConta
// valorTotal += (valorConta * gorjeta) / 100

// Terceira forma de resolução
valorTotal = valorConta + (valorConta * gorjeta) / 100

alert('O valor total com gorjeta é de $' + valorTotal)