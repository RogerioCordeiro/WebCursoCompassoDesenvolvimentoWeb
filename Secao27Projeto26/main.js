let numberInput = document.getElementById("numberInput");
let checkButton = document.getElementById("checkButton");
let outputDiv = document.getElementById("output");

checkButton.addEventListener("click", function() {
  let number = Number(numberInput.value);
  // O erro estava na verificação do if inicial, onde estava sendo usao OU || no lugar de E &&
  // Tambem faltava o operado = na comparação com o número 1
  if (number >= 1 && number <= 10) {
    outputDiv.innerHTML = "Valid number!";
  } else if (number < 1) {
    outputDiv.innerHTML = "Number is too small!";
  } else if (number > 10) {
    outputDiv.innerHTML = "Number is too large!";
  } else {
    outputDiv.innerHTML = "Something went wrong!";
  }

  numberInput.value = ""
});
