window.addEventListener('scroll', function() {
    let scroll = this.document.querySelector('.div-arrow-img');
    scroll.classList.toggle('active', this.window.scrollY > 250);
});

let menuMobile = document.querySelector('.menu-mobile-section');

// function toggleMenu() {
//     let nav = document.getElementById('nav');
//     nav.classList.toggle('active');
// }
// menuMobile.addEventListener('click', toggleMenu);



function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile-section');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('#menu-mobile-button-img').src = "IMG/menuMobile/menuMobile-closed.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('#menu-mobile-button-img').src = "IMG/menuMobile/menuMobile-open.png";
    }
};













