// Botão VoltaTopo desaparece ao chegar perto do home
window.addEventListener('scroll', function() {
    let scroll = this.document.querySelector('.div-arrow-img');
    scroll.classList.toggle('active', this.window.scrollY > 250);
});

// Animação de surgimento das informações de cada section
// USANDO DEBOUNCE FUNCTION
let debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        let context = this;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow) func.apply(context, args);
    };
};

let target = document.querySelectorAll('[data-anime]');
let animationClass = 'animate';

function animeScroll() {
    let windowTop =window.pageYOffset + (window.innerHeight * 3) / 4;
    target.forEach(function(element) {
        if ((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass);
        }
    });
}

animeScroll();

// ATIVANDO O DEBOUNCE FUNCTION
if (target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 150));
} 











// function anime() {
//     const windowTop = window.scrollY + ((window.innerHeight * 3) / 4);
//     target.forEach(function(element) {
//         if((windowTop) > element.offsetTop) {
//             element.classList.add('animar')
//         } else {
//             element.classList.remove('animar')
//         }

//     })
// }
// if(target.length) {
// window.addEventListener('scroll', debounce(function(){
//     // console.log('conte')
//     anime()
//     console.log('dsad')
// }, 200));
// }
// function debounce(fn, delay) {
//     let timer = null
//     return function() {
//         clearTimeout(timer)
//         timer = setTimeout(function() {
//             fn()
//         }, delay)
//     }
// }






// MENU MOBILE


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













