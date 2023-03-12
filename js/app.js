// header
window.onscroll = function (e) {  
    if(window.pageYOffset > 20) {
        document.querySelector('nav').classList.add('header-scrolled')
    }
    else {
        document.querySelector('nav').classList.remove('header-scrolled')
    }
} 

// scrollreveal.js
ScrollReveal().reveal('.title h1', {
    duration: 500,
    origin: 'bottom',
    distance: '20px',
    scale: 0.98
});

ScrollReveal().reveal('.title p', {
    delay: 100,
    duration: 500,
    origin: 'bottom',
    distance: '20px',
    scale: 0.98
});

ScrollReveal().reveal('.title .store_badges', {
    delay: 200,
    duration: 500,
    origin: 'bottom',
    distance: '20px',
    scale: 0.98
});

ScrollReveal().reveal('.landing_image', {
    delay: 250,
    duration: 500,
    origin: 'bottom',
    distance: '20px',
    scale: 0.98
});

ScrollReveal().reveal('.background_shape', {
    delay: 300,
    duration: 500,
    origin: 'bottom',
    distance: '50px',
});