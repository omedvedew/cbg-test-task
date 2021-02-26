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



