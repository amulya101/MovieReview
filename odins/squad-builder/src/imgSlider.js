import "./slider.css";

let slideIndex = 1;

showSlides(slideIndex);

function plusSide (n) {
  showSlides(slideIndex += n);
}

function currentSlide (n) {
  showSlides(slideIndex = n);
}

let dots = document.getElementsByClassName("dot");
for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener("click", function() {
        currentSlide(i + 1);
    });
}

let prevBtn = document.querySelector(".prev");
let nextBtn = document.querySelector(".next");
prevBtn.addEventListener("click", function() {
    plusSide(-1);
});
nextBtn.addEventListener("click", function() {
    plusSide(1);
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1};
    if ( n < i) {slideIndex = slides.length};
    for (i =0; i< slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i =0; i< dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}   