const burger = document.querySelector(`#burger-icon`);
let burgers = document.querySelectorAll('.header__menu, .burger-icon, .app-link');
let body = document.querySelector(`body`)
burger.addEventListener("click", () => {
    burgers.forEach(item => item.classList.toggle('menu-open'));
    // body.classList.toggle(`block-scroll`)
});

const contactBlockCloseBtn = document.querySelector('#contactBlockCloseBtn');
const contactBlock = document.querySelector('#contactBlock');
contactBlockCloseBtn.addEventListener("click", () => {
    contactBlock.classList.add("displayNone");
});





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
//     for(var i=0; i<event.target.children.length; i++){
//         event.preventDefault()
//         console.log(event.target.children[i].classList.value );
//         console.log(typeof(event.target.children[i].classList.value.length)  );
//         // event.target.children[i].classList.value == `app-link` ? console.log(`yes`): ``;
//         // event.target.children[i] ==
//         if (event.target.children[i].classList.value != `header__menu-lists-item` || event.target.children[i].classList.value.length != 0 || event.target.children[i].classList.value != `header__menu-lists`) {
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
// });