//! from ('js_parts/accordeon.js')
const accordion = document.querySelectorAll(".head, .hidden");

//! from ('js_parts/burger.js'),
const burger = document.querySelector(`#burger-icon`);
const burgers = document.querySelectorAll('.header__menu, .burger-icon, .app-link');
const body = document.querySelector(`body`);
const headerBody = document.querySelector(`.header__body`);
const headerAnker = document.querySelectorAll(`.linkAnker`);
//! from   ('js_parts/popap.js')
// close google maps contakt block
const contactBlockCloseBtn = document.querySelector('#contactBlockCloseBtn');

// open/close  popap contact block
const contactPopapBlock = document.querySelector('#contactPopap');
const contactLinkBtn = document.querySelectorAll('#contact-linkbtn, #contact-linkbtn-footer');
const contactPopapCloseBtn = document.querySelector('#contact-popap__title-btnClose');
const contactBlock = document.querySelector('#contactBlock');
const wrapper = document.querySelector('#wrapper');

// open/close loggin
const logginBtn = document.querySelectorAll('#loggin-btn-header, #loggin-btn-footer');
const loggedPopap = document.querySelector('.logged-popap');
const loggedPopapCloseBtn = document.querySelector('.form-loggin-close-btn');

//! from ('js_parts/rent_car_hover.js')
const rentItem = document.querySelectorAll(`.rent-type__aboute-item`);
const rentItemText = document.querySelectorAll(`.rent-type__aboute-item-text`);
const rentItemBtn = document.querySelectorAll(`.rent-type__aboute-item-btn`);


//! from    js_parts/autopark_carousel_hover
const autoparkCarouselItem = document.querySelectorAll(`.autopark__carousel-item`);

// open/close burger menu
burger.addEventListener("click", () => {


        wrapper.classList.toggle("overlay");
        body.classList.toggle("block-scroll");
        headerBody.classList.toggle("positionRelativeHeader");
        //positionRelativeHeader
    // if(window.innerWidth<=1240 && burger.classList.contains('menu-open')){
    //     wrapper.classList.remove("overlay");
    //     body.classList.remove("block-scroll");
    // }

    burgers.forEach(item => item.classList.toggle('menu-open'));

});

// // close menu onclick without menu
$(document).mouseup(function (e) {
    // console.log(e.target.classList.value);
    if ($(burgers).has(e.target).length === 0  && $(burger).hasClass(`menu-open`)){
        burgers.forEach(item => item.classList.toggle('menu-open'));
        wrapper.classList.toggle("overlay");
        body.classList.toggle("block-scroll");
        headerBody.classList.toggle("positionRelativeHeader");
    }
});

headerAnker.forEach(item => item.addEventListener("click", () => {
    console.log(`click`);
    if(window.innerWidth <= 1240){
    wrapper.classList.toggle("overlay");
    body.classList.toggle("block-scroll");
    headerBody.classList.toggle("positionRelativeHeader");
    burgers.forEach(item => item.classList.toggle('menu-open'));
    }
}));

window.addEventListener('resize', () => {
    if (window.innerWidth > 1240) {
        burgers.forEach(item => item.classList.remove('menu-open'));
        wrapper.classList.remove("overlay");
        body.classList.remove("block-scroll");
        headerBody.classList.remove("positionRelativeHeader");
    }
});




// window.addEventListener("scroll", function () {
//     // let headerMenu = document.getElementsByClassName(`header__menu menu-open`);
//     // let testDivs = Array.prototype.filter.call(headerMenu, function(testElement){
//     //     return testElement.nodeName;
//     // });
//     // console.log(testDivs[0]);
//     if(window.innerWidth <= 1240 && burger.classList.contains(`menu-open`)){
//         let headerMenu = document.getElementsByClassName(`header__menu menu-open`);
//         let testDivs = Array.prototype.filter.call(headerMenu, function(testElement){
//         return testElement.nodeName;
//         });
        
//         // console.log(testDivs[0].classList);
//         function offset(el) {
//             let rect = el.getBoundingClientRect();
//             console.log(rect.top );
//             if(rect.top <= 0){
//                 console.log(testDivs[0]);
//                 // testDivs[0].classList.add(`positionFixed`)
//                 // testDivs[0].style.position = `sticky`
//                 // testDivs[0].style.top = `0`
//             }
//             if(rect.top >= 0){
//                 // testDivs[0].style.position = ``
//                 // testDivs[0].style.top = ``
//             }
//         }
//         offset(headerMenuLists)
//     }

// })






// //    headerMenu.offsetHeight
// let lastScrollTop = 0;
// // const headerMenuHeight = document.querySelector(`.header__upper-box`).offsetHeight;
// window.addEventListener("scroll", function () {
//     let ScrollPosition = window.scrollY || document.documentElement.scrollTop;

//     let ScrollDirection = ScrollPosition < lastScrollTop ? up : down;
//     if (window.scrollY >= 80) {
//         // document.querySelectorAll(`.header, .header__menu`).forEach(item => item.classList.add(`white`));
//         document.querySelector(`.header`).style.top = -80`px`;
//     } else {
//         document.querySelectorAll(`.header, .header__menu`).forEach(item => item.classList.remove(`white`));
//     }
//     if (window.scrollY >= 80 && ScrollDirection === `up`) {
//         document.querySelector(`.header`).style.top = 0;
//     }

//     lastScrollTop = ScrollPosition <= 0 ? 0 : ScrollPosition; // For Mobile or negative scrolling 
// });










// $('#burger-icon').click(function(){
//     if($(`#burger-icon`).hasClass('menu-open')){
//         $(`#burger-icon`).removeClass('menu-open')
//       }
//   });

// $(document).click( function(e){
//     if ( $(e.target).closest('.header__menu-lists').length ) {
//         // клик внутри элемента 
//         return;
//     }
//     // клик снаружи элемента 
//             burger.classList.remove("menu-open");
//             body.classList.remove(`block-scroll`);
//             burgers.forEach(item => item.classList.remove('menu-open'));
// });
// $(document).mouseup(function (e) {
//     var container = $(".header__menu-lists");
//     if (container.has(e.target).length === 0){
//             burger.classList.remove("menu-open");
//             body.classList.remove(`block-scroll`);
//             burgers.forEach(item => item.classList.remove('menu-open'));
//     }
// });

// document.addEventListener("click", menu);

// function menu(event) {
// //   if (event.target.closest(".menu__button")) {
// //     menuBody.classList.toggle("_active");
// //   }
//     for(let i=0; i<event.target.children.length; i++){
//         event.preventDefault()
//         console.log(event.target.children[i].classList.value );
//         event.target.children[i].classList.value == `app-link` ? console.log(`yes`): ``;
//         // event.target.children[i] ==
//         if (event.target.children[i].classList.value != `header__menu-lists-item` || event.target.children[i].classList.value != `header__menu-lists`) {
//             burger.classList.remove("menu-open");
//             body.classList.remove(`block-scroll`);
//             burgers.forEach(item => item.classList.remove('menu-open'));
//         }
//     }

// }
















// document.querySelectorAll('.header__item_dropdown').forEach(item => item.addEventListener(`click`, () => {
//     item.classList.toggle(`more`);
// }));

{/* <button id="burger-icon" class="burger-icon">
<div class="burger-icon-item"></div>
</button> */}




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
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
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
        responsive:[
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 410,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        focusOnSelect: true,
        centerPadding: `0px`,
        infinite: true,
        appendArrows: $(`.carousel-username__arrows`),
        appendDots: $(`.carousel-username__dots`)
        });




            $('.carousel-reviews  .carousel-username  .autopark__carousel  .rent-car__carousel').slick(`setPosition`);
    });





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



// !close google maps contakt block
// close google maps contakt block
contactBlockCloseBtn.addEventListener("click", () => {
    contactBlock.classList.add("displayNone");
});


//! open/close fixed popap contact block
contactLinkBtn.forEach(item => item.addEventListener("click", (e) => {
    let scrollX = window.scrollX
    let scrollY = window.scrollY;
    window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
    // console.log(`click`);
    wrapper.classList.add("overlay");
    body.classList.add("block-scroll");
    contactPopapBlock.classList.add("displayBlock");
    if(burger.classList.contains('menu-open')){
        burgers.forEach(item => item.classList.toggle('menu-open'));
    }
}));

contactPopapCloseBtn.addEventListener("click", () => {
    // console.log(`click`);
    contactPopapBlock.classList.remove("displayBlock");
    wrapper.classList.remove("overlay");
    window.onscroll = function () { return false };
    body.classList.remove("block-scroll");
});

// ! open/close loggin popap       
logginBtn.forEach(item =>{
    item.addEventListener("click", (e) => {
    let scrollX = window.scrollX
    let scrollY = window.scrollY;
    window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
    // console.log(`click`);
    loggedPopap.classList.add("loggedPopapBlock");
    wrapper.classList.add("overlay");
    if(burger.classList.contains('menu-open')){
        burgers.forEach(item => item.classList.toggle('menu-open'));
    }

})});
loggedPopapCloseBtn.addEventListener("click", () => {
    // console.log(`click`);
    loggedPopap.classList.remove("loggedPopapBlock");
    wrapper.classList.remove("overlay");
    window.onscroll = function () { return false };
    body.classList.remove("block-scroll");
});


// rentItem.forEach(item => {
//     item.addEventListener("mouseenter", ( event )  =>{
//         console.log(item.children[1].classList);
//         item.children[1].classList.add('rentTextBlock')
// })});

rentItem.forEach( item => { 
    item.onmouseover = (e) => {
        // console.log(item.children[2]);
        item.children[1].classList.add(`rentTextBlock`)
        item.children[2].classList.add(`rentBtnBorder`)
        // console.log(document.body.scrollHeight);
        // console.log(window.pageYOffset); 
    }
})
rentItem.forEach( item => { 
    item.onmouseout = (e) => {
        // console.log(item.children[1].classList);
        item.children[1].classList.remove(`rentTextBlock`)
        item.children[2].classList.remove(`rentBtnBorder`)
    }
})



// const sidehovers = document.querySelectorAll(`.
// test__item`);
// console.log(sidehovers)
// sidehovers.forEach(function (item) {
// item.onmouseover = () => {
// sidehovers.forEach(item => item.classList.add(`off`));
// item.classList.remove(`off`);
// }
// });
// document.querySelector(`.test__box`).onmouseout = () => {
// sidehovers.forEach(item => item.classList.remove(`off`));
// }
autoparkCarouselItem.forEach( item => { 
    item.onmouseover = (e) => {
        // console.log(`mause_on`);

        // console.log(item.children[1].classList.add(`autoparkCarouselItemTextBlock`));
        item.children[1].classList.add(`autoparkCarouselItemTextBlock`)
        // item.children[2].classList.add(`autoparkCarouselItemTextBlock`)
        // console.log(document.body.scrollHeight);
        // console.log(window.pageYOffset); 
    }
})
autoparkCarouselItem.forEach( item => { 
    item.onmouseout = (e) => {
        // console.log(`mause_leave`);
        item.children[1].classList.remove(`autoparkCarouselItemTextBlock`)
        // console.log(item.children[1].classList);
        // item.children[2].classList.remove(`rentBtnBorder`)
    }
})

// classList.add(`autoparkCarouselItemTextBlock`)
const toTopBtn = document.querySelector('.to-up');
document.addEventListener('DOMContentLoaded', () => {
    

    window.onscroll = function () {
    if (window.pageYOffset > 580) {
        toTopBtn.style.display = 'block'
    } else {
        toTopBtn.style.display = 'none'
    }
    }})

    // плавный скролл наверх
    toTopBtn.addEventListener('click', function () {
    window.scrollBy({
        top: -document.documentElement.scrollHeight,
        behavior: 'smooth'
    })
    });

function initMap() {
    let myLatLng = {lat: 50.44900762437147, lng: 30.46055098217495};
    let imgIcon = `img/pin_map.png`;
    // let markerPosition = 50.45001800056024, 30.458515103173678
    let stylesMap = [{"elementType":"geometry","stylers":[{"color":"#212121"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#212121"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#757575"}]},{"featureType":"administrative.country","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#181818"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"poi.park","elementType":"labels.text.stroke","stylers":[{"color":"#1b1b1b"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#2c2c2c"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#8a8a8a"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#373737"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#3c3c3c"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#4e4e4e"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#3d3d3d"}]}]
    
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,  // определяет масштаб карты, ее "зум"
        center: myLatLng,       // map coordinate
        styles: stylesMap        // map styles
    });
        marker = new google.maps.Marker({
            position: {lat: 50.45001800056024, lng: 30.46055098217495}, 
            map: map,
            
            animation: google.maps.Animation.BOUNCE,   // jump cursor
            icon: imgIcon

        });
}




// slow csroll ankor link
let slowAnker = $('html, body');
$('a[href*="#"]').click(function() {
    slowAnker.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

