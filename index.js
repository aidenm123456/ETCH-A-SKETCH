
const squaresContainer = document.querySelector('.squaresContainer');

for (let i=0; i < 256; i++) {

    let newDiv = document.createElement('div');
    newDiv.classList.add('squares');
    newDiv.setAttribute('style', 'background:blue;');

    newDiv.addEventListener("mouseover", function (event) {
        console.log("hovered over")
        event.target.style.background = "orange";
    });

    squaresContainer.appendChild(newDiv);

    
}