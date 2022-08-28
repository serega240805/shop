new Swiper('.companies__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 105,
    slidesPerGroup: 1,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    mousewheel: {
        sensivity: 1,
    },
    breakpoints: {
        1160: {
            slidesPerView: 4,
            spaceBetween: 25,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 105,
        },
        320: {
            slidesPerView: 2,
            spaceBetween: 105,
        },
    },
});
var toggleButton = document.querySelector('.toggle-menu');
    var navBar = document.querySelector('.nav-bar');
    toggleButton.addEventListener('click', function () {
        navBar.classList.toggle('toggle');
    });