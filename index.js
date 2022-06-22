
const squaresContainer = document.querySelector('.squaresContainer');

function createBoard(lw) {

    for (let i=0; i < lw; i++) {

        let newDiv = document.createElement('div');
        newDiv.classList.add('squares');
        newDiv.setAttribute('style', 'background:blue;');
    
        newDiv.addEventListener("mouseover", function (event) {
            console.log("hovered over")
            event.target.style.background = "orange";
        });
    
        squaresContainer.appendChild(newDiv);

}


    
}


function deleteBoard() {

    let response = prompt('Please enter a number between 1 and 50');

    const megaSquare = document.querySelector('.megaSquare')
    const squaresContainer = document.querySelector('.squaresContainer')
    squaresContainer.innerHTML ="";
    
    let repeatVar = "repeat(" + response.toString() + ", 1fr)";
    
    squaresContainer.style.gridTemplateColumns = repeatVar;
    createBoard(response ** 2);
}

function changeBoard() {

    // let response = prompt('Please enter a number between 1 and 50');

    // if (response == "" || response == null || typeof(response) != "number") {
    //     return
    // }

    // else {
    const megaSquare = document.getElementById('megaSquare')

    const squares = document.querySelector('.squaresContainer');
    squares.innerHTML ="";

    let squaresContainer = document.createElement('div');
    squaresContainer.classList.add('squaresContainer');
    megaSquare.appendChild(squaresContainer);
    // }
}



createBoard(144)