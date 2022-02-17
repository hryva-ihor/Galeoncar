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


