window.onload = populateWithFirstImage;

const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const container = document.querySelector('.images');
var currentImage = 1;


prevBtn.addEventListener('click', function() {
    
    if (currentImage !== 1) {
        currentImage--;
        container.style.backgroundImage = "url(https://picsum.photos/id/" + currentImage + "/1000";
    }

});


nextBtn.addEventListener('click', function () {
    currentImage++;
    container.style.backgroundImage = "url(https://picsum.photos/id/" + currentImage + "/1000";

});




function populateWithFirstImage() {
    let url = "url(https://picsum.photos/id/" + currentImage + "/700)";    
    container.style.backgroundImage = url;
}

