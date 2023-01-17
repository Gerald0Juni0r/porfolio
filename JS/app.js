function menuShow() {
    let menuMobile = document.querySelector('.menu-mobile-section');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-mobile-button-imagem').src = "IMG/menuMobile/menuMobile-closed.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-mobile-button-imagem').src = "IMG/menuMobile/menuMobile-open.png";
    }
}













