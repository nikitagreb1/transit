window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navigation__list'),
        menuItem = document.querySelectorAll('.navigation__item::after'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger__active');
        menu.classList.toggle('navigation__active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('navigation__active');
        })
    })
})