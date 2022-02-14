// close google maps contakt block
// close google maps contakt block
const contactBlockCloseBtn = document.querySelector('#contactBlockCloseBtn');
const contactBlock = document.querySelector('#contactBlock');
const wrapper = document.querySelector('#wrapper');


contactBlockCloseBtn.addEventListener("click", () => {
    contactBlock.classList.add("displayNone");
});


// open/close fixed popap contact block
const contactPopapBlock = document.querySelector('#contactPopap');
const contactLinkBtn = document.querySelectorAll('#contact-linkbtn, #contact-linkbtn-footer');
contactLinkBtn.forEach(item => item.addEventListener("click", (e) => {
    // console.log(`click`);
    wrapper.classList.add("overlay");
    contactPopapBlock.classList.add("displayBlock");
    burgers.forEach(item => item.classList.toggle('menu-open'));
}));


const contactPopapCloseBtn = document.querySelector('#contact-popap__title-btnClose');
contactPopapCloseBtn.addEventListener("click", () => {
    // console.log(`click`);
    contactPopapBlock.classList.remove("displayBlock");
    wrapper.classList.remove("overlay");
});