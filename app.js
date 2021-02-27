// Progress bar script

let circle = document.querySelectorAll(".progress-ring__circle");
let percentage = [16, 33, 49, 66, 82, 100];

circle.forEach((el, i) => {    
    let radius = el.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    el.style.strokeDasharray = `${circumference} ${circumference}`;
    el.style.strokeDashoffset = `${circumference}`;

    function setPersent(percent) {
        let offset = circumference - percent / 100 * circumference;
        el.style.strokeDashoffset = offset;
    };

    setPersent(percentage[i]);
});


// Mobile-menu script

let burger = document.querySelector(".burger");
let mobileNav = document.querySelector(".header__mobile__nav");

burger.addEventListener("click", function() {
    mobileNav.classList.toggle("header__mobile__nav-active");
    burger.classList.toggle("burger-active");
});


// portfolio-script
let sources = ["images/IMG-1.png", "images/IMG-2.png", "images/IMG-3.png", "images/IMG-4.png"];
let imagesContainer = document.querySelector(".pws__images-container");
let images = document.querySelectorAll(".pws__i_item");
let paginationContainer = document.querySelector(".pws__silder-container_pagination");
let paginationDots = document.querySelectorAll(".pws__sp_item");
let bigImage = document.querySelector(".pws__sc_big-image");

imagesContainer.addEventListener("click", function (e) {
    let target = e.target;

    if (target.classList.contains("pws__i_item")) {
        paginationDots.forEach((dot) => {
            dot.setAttribute("style", "border: 3px solid #ffb800");
        });

        images.forEach((img, i) => {
            img.classList.remove("active");
            if (target === img) {
                bigImage.setAttribute("src", `${img.getAttribute("src")}`);
                paginationDots[i].setAttribute("style", "border: 3px solid #ffffff");
                img.classList.add("active");
            };
        });
    };
});

paginationContainer.addEventListener("click", function(e) {
    let target = e.target;

    if (target.classList.contains("pws__sp_item")) {
        images.forEach((img) => {
            img.classList.remove("active");
        });

        paginationDots.forEach((dot, i) => {
            dot.setAttribute("style", "border: 3px solid #ffb800");
            if (target === dot) {
                bigImage.setAttribute("src", `${images[i].getAttribute("src")}`);
                images[i].classList.add("active");
                dot.setAttribute("style", "border: 3px solid #ffffff");
            };

        });

    }
})


