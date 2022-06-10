const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.nav');
if (iconMenu) {
    iconMenu.addEventListener('click', function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const closeMenu = document.querySelectorAll('.nav-link');

for (let closeMenuLink of closeMenu) {
    closeMenuLink.addEventListener('click', function() {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
    });
}