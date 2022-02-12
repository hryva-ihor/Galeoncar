
$(document).ready(function(){
    // !    slider for section__rent-car.scss                              
    $('.rent-car__carousel').slick({
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        infinite:true,
        centerPadding: `0px`,
        focusOnSelect: true,
        // speed: 500,
        useTransform: true,
        cssEase: 'linear',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        appendArrows: $(`.rent-car__carousel__arrows_block`)
        });

// !    slider for section_autopark__body.scss                              
    $('.autopark__carousel').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite:false,
        centerPadding: `0px`,
        // speed: 500,
        focusOnSelect: true,
        useTransform: true,
        cssEase: 'linear',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        appendArrows: $(`.autopark__carousel__arrows_block`),
        appendDots: $(`.autopark__carousel__dots_block`)
        });


// ! slider for sections reviews                          
        $('.carousel-reviews').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.carousel-username'
        });
        $('.carousel-username').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.carousel-reviews',
        dots: true,
        // arrows: true,
        // centerMode: true,
        focusOnSelect: true,
        centerPadding: `0px`,
        infinite: true,
        appendArrows: $(`.carousel-username__arrows`),
        appendDots: $(`.carousel-username__dots`)
        });




            $('.carousel-reviews  .carousel-username  .autopark__carousel  .rent-car__carousel').slick(`setPosition`);
    });

