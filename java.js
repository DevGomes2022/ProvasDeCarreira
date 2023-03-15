function menuShow(){
    let menuMobile = document.querySelector('.menu-mobile');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    } else {
        menuMobile.classList.add('open');
    }
}

window.sr = ScrollReveal({ reset: true });

sr.reveal(".mov-a", {
    duration: 600,
    origin: "top",
    distance: "50px"
});

sr.reveal(".mov-b", {
    duration: 600,
    origin: "left",
    distance: "100px"
});

sr.reveal(".mov-c", {
    duration: 600,
    origin: "right",
    distance: "100px"
});

sr.reveal(".mov-d", {
    duration: 600,
    delay: 700,
    origin: "bottom",
    distance: "100px"
});

sr.reveal(".mov-e", {
    duration: 600,
    delay: 900,
    origin: "bottom",
    distance: "100px"
});

sr.reveal(".mov-f", {
    duration: 600,
    delay: 1100,
    origin: "bottom",
    distance: "100px"
});

sr.reveal(".mov-g", {
    duration: 600,
    delay: 1300,
    origin: "bottom",
    distance: "100px"
});

sr.reveal(".mov-h", {
    duration: 600,
    delay: 1500,
    origin: "bottom",
    distance: "100px"
});