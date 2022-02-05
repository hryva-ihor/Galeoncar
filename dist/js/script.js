const burger = document.querySelector(`#burger-icon`);
burger.addEventListener("click", () => {
    let burgers = document.querySelectorAll('.header__menu, .burger-icon');
    // document.querySelector(`body`).classList.toggle(`lock`);
    burgers.forEach(item => item.classList.toggle('menu-open'));
});



// document.querySelectorAll('.header__item_dropdown').forEach(item => item.addEventListener(`click`, () => {
//     item.classList.toggle(`more`);
// }));

{/* <button id="burger-icon" class="burger-icon">
<div class="burger-icon-item"></div>
</button> */}


// let lastScrollTop = 0;
// const headerMenuHeight = document.querySelector(`.header__upper-box`).offsetHeight;
// window.addEventListener("scroll", function () {
//     let ScrollPosition = window.scrollY || document.documentElement.scrollTop;

//     let ScrollDirection = ScrollPosition < lastScrollTop ? up : down;
//     if (window.scrollY >= 80) {
//         document.querySelectorAll(`.header, .header__menu`).forEach(item => item.classList.add(`white`));
//         document.querySelector(`.header`).style.top = -80`px`;
//     } else {
//         document.querySelectorAll(`.header, .header__menu`).forEach(item => item.classList.remove(`white`));
//     }
//     if (window.scrollY >= 80 && ScrollDirection === `up`) {
//         document.querySelector(`.header`).style.top = 0;
//     }

//     lastScrollTop = ScrollPosition <= 0 ? 0 : ScrollPosition; // For Mobile or negative scrolling 
// });,

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



const accordion = document.querySelectorAll(".head, .hidden");

accordion.forEach((item) => {
  item.addEventListener("click", function() {
    

    if (this.classList.contains("active")) {
      this.classList.remove("active")
    }
    else {
      accordion.forEach((child) => {
        child.classList.remove("active")
      })
      this.classList.add("active")
    }
  })
})




