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



