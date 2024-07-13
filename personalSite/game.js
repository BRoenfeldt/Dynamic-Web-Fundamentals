
//set global variable to keep track of how many squares have been clicked
let squaresClicked = 0;




function winDetection(squaresClicked, event) {
    //Finds pete
    const peteElements = document.getElementsByClassName("square pete");
    //If all squares have been clicked and pete is found on last square, run clickedPete function
    if (squaresClicked == 8) {
        if (Array.from(peteElements).includes(event.target) == true) {
            clickedPete();
        } else {
            //if pete is not found on last square, alert user that they won and reload the page
            alert("You win! \n\nClick ok to restart the game.");
            location.reload();
        }
    }
}

    function getRandomSquare() {
        //Pick a random square to place Pete
        let squares = document.getElementsByClassName("square");
        let randomSquare = Math.floor(Math.random() * 9);
        console.log("Random Square " + randomSquare);
        squares[randomSquare].classList.add("pete");
    }

    function lookForPete() {
        //Find pete and add event listener
        let pete = document.getElementsByClassName("square pete");
        pete[0].addEventListener("click", function () {
            //Log pete was clicked and run clickedPete function
            console.log("Pete was clicked");
            clickedPete();
        });
    }

    function clickedPete() {
        //Alert user that they found Pete and reload the page
        const dep = document.getElementById("dep");
        dep.style.display = "flex";
        setTimeout(gameover, 250);
    }

    function changeButtonImages() {
        //Change image to crumbs when clicked
        //Get all buttons with images
        const buttonImgs = document.getElementsByClassName("square");

        Array.from(buttonImgs).forEach(button => {
            button.addEventListener('click', function (event) {
                const img = this.querySelector('img');
                if (img) {
                    img.src = "images/crumbs.webp";
                    squaresClicked++;
                    winDetection(squaresClicked, event);
                }
            });
        });
    }

    function restartGame() {
        //Reload the page to restart the game when restart is clicked
        const restartButton = document.getElementById("restart");
        restartButton.addEventListener('click', function () {
            location.reload();
        });
    }

    function gameover() {
        alert("DON'T EAT PETE! \n\nClick ok to restart the game.");
        location.reload();
    }




    //Load in all functions on page load
    document.addEventListener("DOMContentLoaded", getRandomSquare);
    document.addEventListener("DOMContentLoaded", lookForPete);
    document.addEventListener("DOMContentLoaded", changeButtonImages);
    document.addEventListener("DOMContentLoaded", restartGame);
