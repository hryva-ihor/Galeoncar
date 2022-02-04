
$(document).ready(function(){
    // !    slider for section__rent-car.scss                              
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
            var dots = $('.autopark__carousel li');
            //вешаем обработчик на наши точки
            dots.click(function(){
                var $this = $(this);
                dots.removeClass('before after');
                //отображаем 2 предыдущие точки
                $this
                    .prev().addClass('before')
                    .prev().addClass('before');
                //отображаем 2 следующие точки
                $this
                    .next().addClass('after')
                    .next().addClass('after');
        
            
                //если мы в самом начале - добавляем пару последующих точек
                if(!$this.prev().length) {
                    $this.next().next().next()
                        .addClass('after').next()
                        .addClass('after');
                }
                //на 2й позиции - добавляем одну точку
                if(!$this.prev().prev().length) {
                    $this.next().next().next()
                    .addClass('after');
                }
                //в самом конце - добавляем пару доп. предыдущих точек
                if(!$this.next().length) {
                    $this.prev().prev().prev()
                        .addClass('before').prev()
                        .addClass('before');
                }
                //предпоследний элемента - добавляем одну пред. точку
                if(!$this.next().next().length) {
                    $this.prev().prev().prev()
                        .addClass('before');
                }	
            });
            dots.eq(0).click();//кликаем на первую точку
            $('.autopark__carousel , .rent-car__carousel').slick(`setPosition`);
    });

