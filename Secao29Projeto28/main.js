const images = [
    "images/image_1.jpg",
    "images/image_2.jpg",
    "images/image_3.jpg"
]

let currentIndex = 0

let imageElement = document.getElementById('image')
let buttonElement = document.getElementById('button')
// Minha Solução para o caso.
buttonElement.addEventListener('click', function(){
    currentIndex = (currentIndex > 1) ? 0 : currentIndex + 1
    imageElement.src =images[currentIndex]
})