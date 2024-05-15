
function buttonClickPrint(){
    const menu = document.getElementById("headerMenu");
    menu.classList.toggle('hidden')  
}

function viewHandler(){
    const view = document.getElementById("viewCloser");
    view.classList.toggle('hidden')
}

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }


const button = document.getElementById("menuButton");
button.addEventListener('click', buttonClickPrint);
