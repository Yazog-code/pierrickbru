/* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    color: #1f2933;
}

/* VARIABLES */
:root {
    --primary: #f28c28;
    --dark: #243746;
}

/* NAVBAR */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 72px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.logo {
    font-weight: 700;
    font-size: 22px;
}

.logo span {
    color: var(--primary);
}

/* BURGER */
.burger {
    background: none;
    border: none;
    display: flex;
    flex-direction: column;
    gap: 5px;
    cursor: pointer;
}

.burger span {
    width: 26px;
    height: 3px;
    background: #1f2933;
    border-radius: 3px;
}

/* MENU SLIDE */
.mobile-nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    padding: 100px 20px;
    gap: 25px;
    transition: right 0.4s ease;
    z-index: 999;
}

.mobile-nav.active {
    right: 0;
}

.mobile-nav a {
    font-size: 1.2rem;
    font-weight: 600;
}

.btn-mobile {
    background: var(--primary);
    color: #fff;
    padding: 14px;
    text-align: center;
    border-radius: 10px;
}

/* OVERLAY */
.overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 998;
}

.overlay.active {
    opacity: 1;
    pointer-events: all;
}

/* HERO */
.hero {
    min-height: 100vh;
    background: linear-gradient(rgba(36,55,70,0.65), rgba(36,55,70,0.65)),
    url("hero.jpg") center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px 20px;
    text-align: center;
    color: #fff;
}

.hero-logo {
    width: 90px;
    margin-bottom: 20px;
}

/* ACCORDÉONS */
.accordion {
    max-width: 600px;
    margin: auto;
}

.accordion-item {
    border-bottom: 1px solid #ddd;
}

.accordion-header {
    width: 100%;
    background: none;
    border: none;
    padding: 18px;
    font-size: 1.1rem;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    padding: 0 18px;
    transition: max-height 0.3s ease;
}

.accordion-content p {
    padding-bottom: 15px;
}

/* CTA */
.cta {
    background: var(--dark);
    color: #fff;
    text-align: center;
    padding: 80px 20px;
}

/* ANIMATIONS SCROLL */
.reveal {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}
