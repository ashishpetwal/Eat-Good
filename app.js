const navMenu = document.querySelector(".nav-menu");
const hamBtn = document.querySelector(".hamBtn")

hamBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamBtn.classList.toggle("fa-xmark")
});

const dots = document.querySelectorAll(".i");

// reviews[0].style.display = "block";
// reviews[1].style.display = "none";
// reviews[2].style.display = "none";


// let i = 1;
// setInterval(() => {
//     reviews[i].style.display = "block"
//     reviews[(i + 1) % 3].style.display = "none"
//     reviews[(i + 2) % 3].style.display = "none"
//     i = (i + 1) % 3;
// }, 4000);


let slideIndex = 1;
showreviews(slideIndex);

function plusreviews(n) {
    showreviews(slideIndex += n);
}

function currentSlide(n) {
    showreviews(slideIndex = n);
}

function showreviews(n) {
    let i;
    const reviews = document.getElementsByClassName("cr");
    if (n > reviews.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = reviews.length }
    for (i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[slideIndex - 1].style.display = "block";
    dots[(slideIndex-1)%3].style.color = "goldenrod"
    dots[(slideIndex) % 3].style.color = "white"
    dots[(slideIndex + 1) % 3].style.color = "white"
}
let j=1;
setInterval(() => {
    currentSlide(j);
    j=(j+1)%3;
}, 10000);