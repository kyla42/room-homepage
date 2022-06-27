// slider
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const desc = document.querySelectorAll(".description");
const img = document.querySelectorAll(".image");

let i = 0;
const nextSlide = function() {
    desc[i].style.transform = `translateX(${-100 * (i - 1)}%)`;
    img[i].style.transform = `translateX(${100 * (i - 1)}%)`;
    i++;
    if (i > desc.length - 1) {
        i = 0;
    }
    desc[i].style.transform = `translateX(${-100 * i}%)`;
    img[i].style.transform = `translateX(${100 * i}%)`;
}

const prevSlide = function() {
    desc[i].style.transform = `translateX(${-100 * (i - 1)}%)`;
    img[i].style.transform = `translateX(${100 * (i - 1)}%)`;
    i--;
    if (i < 0) {
        i = desc.length - 1;
    }
    desc[i].style.transform = `translateX(${-100 * i}%)`;
    img[i].style.transform = `translateX(${100 * i}%)`;
}

// - click
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// - keydown
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        nextSlide();
        next.style.opacity = "0.7";
        setTimeout(() => next.style.opacity = null, 250);
    }
    if (event.key === "ArrowLeft") {
        prevSlide();
        prev.style.opacity = "0.7";
        setTimeout(() => prev.style.opacity = null, 250);
    }
})


// mobile menu
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector(".mobile-menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function(){
    overlay.classList.add("active");
    mobileMenu.classList.add("active");

    close.addEventListener("click", function(){
        overlay.classList.remove("active");
        mobileMenu.classList.remove("active");
    })
})