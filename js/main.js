$(function () {
    $('.menu__btn').on('click', () => {
        $('.menu__list').toggleClass('menu__list--active');
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            // controls: 0,
            // showinfo: 0
        }
    });

    $('.heroes__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="./images/heroes/arrow-left.png" alt="Предыдущий слайд"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="./images/heroes/arrow-right.png" alt="Следующий слайд"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    // dots: true
                }
            }
        ]
    });
    $('.heroes__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__slider-img',
        fade: true,
        arrows: false
    });


























});