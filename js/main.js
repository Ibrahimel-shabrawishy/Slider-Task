"use strict";
let imgList = Array.from(document.getElementsByClassName("img-item"));
let lightboxContainer = document.querySelector(".lightbox-container");
let lightboxItem = document.querySelector(".lightbox-item");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let closeButton = document.getElementById("close");
let currentIndex = 0;



for (let i = 0; i < imgList.length; i++) {
    imgList[i].addEventListener("click", function(e) {

        currentIndex = imgList.indexOf(e.target);

        let imgSrc = e.target.getAttribute("src");
        lightboxContainer.classList.replace("d-none", "d-flex");

        lightboxItem.style.backgroundImage = `url(${imgSrc})`;

    })
}

function nextSlide() {


    currentIndex++;
    if (currentIndex == imgList.length) {
        currentIndex = 0;
    }
    let imgSrc = imgList[currentIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;


}

nextButton.addEventListener("click", nextSlide);



function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgList.length - 1;
    }
    let imgSrc = imgList[currentIndex].getAttribute("src");
    lightboxItem.style.backgroundImage = `url(${imgSrc})`;

}
prevButton.addEventListener("click", prevSlide);


closeButton.addEventListener("click", function() {
    lightboxContainer.classList.replace("d-flex", "d-none");
})

document.addEventListener("keydown", function(e) {
    if (e.key == "ArrowRight") {
        nextSlide(1);

    } else if (e.key == "ArrowLeft") {
        prevSlide(-1);
    } else if (e.key == "Escape") {
        closeButton();
    }
})