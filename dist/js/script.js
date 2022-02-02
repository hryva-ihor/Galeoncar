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
// !    slider for section__rent-car.scss                              
$(document).ready(function(){
    $('.rent-car__carousel').slick({
        // dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        infinite:true,
        centerPadding: `0px`,
        
        // initialSlide: 4,
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





