$(document).ready(function () {
    $('.companies__slider').slick({
        slidesToShow: 4,
        slideToScroll: 4,
        dots: true,
        arrows: true,
        adaptiveHeight: true,
        variableWidth: true,
        speed: 1000,
        autoplay: true,
        touchThreshold: 30,
        responsive:[
                {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            }
        ]
    });
})
