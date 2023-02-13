window.onscroll = function (e) {  
    if(window.pageYOffset > 20) {
        document.querySelector('nav').classList.add('header-scrolled')
    }
    else {
        document.querySelector('nav').classList.remove('header-scrolled')
    }
} 