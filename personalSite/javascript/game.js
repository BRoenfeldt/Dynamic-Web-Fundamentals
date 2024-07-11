function getRandomSquare() {
    //
    let squares = document.getElementsByClassName("square");
    let randomSquare = Math.floor(Math.random() * 9);
    console.log("Random Square " + randomSquare);
    squares[randomSquare].classList.add("pete");
}

function lookForPete() {
    let pete = document.getElementsByClassName("square pete");
    pete[0].addEventListener("click", function() {
        console.log("Pete was clicked");
        clickedPete();
    });
}   

function clickedPete() {
    console.log("Pete was clicked");
    alert("You found Pete! Click OK to play again.");
    location.reload();
}

document.addEventListener("DOMContentLoaded", getRandomSquare);
document.addEventListener("DOMContentLoaded", lookForPete);



/*
function assignPeteNumber() {
    let peteNumber = Math.floor(Math.random() * 9);
    console.log("pete number " + peteNumber);
    return peteNumber;
}

function assignPetePlacement() {
    let peteNumber = assignPeteNumber();
    let gridItems = document.getElementsByClassName("grid-item");
    let peteDiv = document.createElement("div");
    peteDiv.classList.add("pete");
    peteDiv.innerHTML = "Pete";
    gridItems[peteNumber].appendChild(peteDiv);
}
*/