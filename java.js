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
    delay: 400
});