new Swiper('.companies__slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    slidesPerView: 4,
    spaceBetween: 25,
    slidesPerGroup: 3,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
});