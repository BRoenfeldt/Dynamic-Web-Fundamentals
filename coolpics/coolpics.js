
function buttonClickPrint(){
    const menu = document.getElementById("headerMenu");
    menu.classList.toggle('hidden')  
}

const button = document.getElementById("menuButton");
button.addEventListener('click', buttonClickPrint);

const screenSize = innerWidth