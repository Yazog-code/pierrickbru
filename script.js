// MENU MOBILE
const burger = document.getElementById('burger');
const navMobile = document.getElementById('navMobile');

burger.addEventListener('click', () => {
    navMobile.style.right =
        navMobile.style.right === '0px' ? '-100%' : '0';
});

// ACCORDIONS
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const open = content.style.maxHeight;

        document.querySelectorAll('.accordion-content')
            .forEach(c => c.style.maxHeight = null);

        if (!open) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// SCROLL ANIMATIONS
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isInte
