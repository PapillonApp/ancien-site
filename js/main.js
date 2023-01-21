// title
function title_options(delay) {
    return {
        origin: 'bottom',
        distance: '50px',
        duration: 700,
        delay: delay,
    }
};

ScrollReveal().reveal('#main_title', title_options(150));
ScrollReveal().reveal('#main_desc', title_options(250));
ScrollReveal().reveal('#main_buttons', title_options(300));
ScrollReveal().reveal('#main_conditions', title_options(350));

// navbar
ScrollReveal().reveal('#notification_inner', {
    origin: 'top',
    distance: '50px',
    duration: 700,
    delay: 100,
});

ScrollReveal().reveal('.feature_name', title_options(100));
ScrollReveal().reveal('.feature_desc', title_options(200));
ScrollReveal().reveal('.feature_img', title_options(300));

// sections
ScrollReveal().reveal('.section_title', title_options(100));
ScrollReveal().reveal('.section_description', title_options(200));

// privacy
ScrollReveal().reveal('.pc1', title_options(300));
ScrollReveal().reveal('.pc2', title_options(350));
ScrollReveal().reveal('.pc3', title_options(400));

// contribs
let contribs = document.getElementsByClassName('contrib');
for (let i = 0; i < contribs.length; i++) {
    ScrollReveal().reveal(contribs[i], title_options(100 * i));
}