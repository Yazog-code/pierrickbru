/* MENU MOBILE */
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.setAttribute(
            'aria-expanded',
            nav.classList.contains('nav-active')
        );
    });
}

/* NAVBAR SCROLL EFFECT */
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

/* FORMULAIRE */
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 48h.");
        form.reset();
    });
}
