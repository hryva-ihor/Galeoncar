const burger = document.querySelector(`#burger-icon`);
burger.addEventListener("click", () => {
    let burgers = document.querySelectorAll('.header__menu, .burger-icon, .app-link');
    let body = document.querySelector(`body`)
    // document.querySelector(`body`).classList.toggle(`lock`);
    burgers.forEach(item => item.classList.toggle('menu-open'));
    body.classList.toggle(`block-scroll`)
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

