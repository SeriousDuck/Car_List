const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
    element.addEventListener('click', open);
});

// тут відслідковую активний tabs__btn-item--active, щоб змінювався колір-активність кнопки
function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item) {
        item.classList.remove('tabs__btn-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach(function(item) {
        item.classList.remove('tabs__content-item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}

// burgerMenu
const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--active');
});




const swiper = new Swiper(".swiper", {
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});