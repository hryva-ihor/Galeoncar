//! from ('js_parts/accordeon.js')
const accordion = document.querySelectorAll(".head, .hidden");

//! from ('js_parts/burger.js'),
const burger = document.querySelector(`#burger-icon`);
const burgers = document.querySelectorAll('.header__menu, .burger-icon, .app-link');
const body = document.querySelector(`body`);

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
