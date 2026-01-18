/* MENU SLIDE */
const burger = document.querySelector('.burger');
const mobileNav = document.querySelector('.mobile-nav');
const overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
});

overlay.addEventListener('click', closeMenu);

function closeMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
}

/* ACCORDÉONS */
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

/* SCROLL REVEAL */
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach(el => {
        if (el.getBoundingClientRect().top < windowHeight - 80) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
