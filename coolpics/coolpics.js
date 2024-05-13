
document.addEventListener('DOMContentLoaded',  
    function () {
        const selectElement = document.getElementsByClassName("menuButton");
        selectElement.addEventListener('click', function() {
            console.log("clicked");
        })
    }
);