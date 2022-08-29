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
    autoplay: {
        delay: 5000,
        speed: 100,
    },
    breakpoints: {
        1160: {
            slidesPerView: 4,
            spaceBetween: 35,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 35,
        },
        320: {
            spaceBetween: 15,
            slidesPerView: 'auto',
        },
    },
});
var toggleButton = document.querySelector('.toggle-menu');
var navBar = document.querySelector('.nav-bar');
toggleButton.addEventListener('click', function () {
    navBar.classList.toggle('toggle');
});