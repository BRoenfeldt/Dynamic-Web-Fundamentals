function toggleHeadMenu(){
    const menu = document.getElementById("headerMenu");
    menu.classList.toggle('hidden')  
}

const button = document.getElementById("menuButton");
button.addEventListener('click', toggleHeadMenu);
const image = document.getElementById("gallery");
image.addEventListener('click', closeViewer);

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


const xButton = document.getElementById("viewCloser");
xButton.addEventListener('click', closeViewer);

function viewHandler(event) {
    // 1. Create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
  
    // 2. Get the src attribute from that element and 'split' it on the "-"
    const imageSrc = clickedElement.src;
    const imageSrcParts = imageSrc.split("-");
  
    // 3. Construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImageSrc = `${imageSrcParts[0]}-full.jpeg`;
  
    // 4. Insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate);
  
    // 5. Add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.getElementById("viewCloser");
    closeButton.addEventListener("click", closeViewer);
  }
  
  // Function to close the toggle the viewer
  function closeViewer() {
    const imageViewer = document.getElementById("viewer");
    imageViewer.classList.toggle("hidden");
}