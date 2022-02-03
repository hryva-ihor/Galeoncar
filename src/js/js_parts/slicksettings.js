// !    slider for section__rent-car.scss                              
$(document).ready(function(){
    $('.rent-car__carousel').slick({
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        infinite:true,
        centerPadding: `0px`,
        // speed: 500,
        useTransform: true,
        cssEase: 'linear',
        // responsive:[
        //     {
        //         breakpoint: 1000,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     }
        // ],
        appendArrows: $(`.arrows_block`)
        });
        $('.rent-car__carousel').slick(`setPosition`);
    });

        // transition: all 0.5s linear 0.5s;
    // transition-delay: 0.5s;