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
    // body.classList.add("block-scroll");
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
    // body.classList.remove("block-scroll");
});

// ! open/close loggin popap       
logginBtn.forEach(item =>{
    item.addEventListener("click", (e) => {
    let scrollX = window.scrollX
    let scrollY = window.scrollY;
    window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
    console.log(`click`);
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
    // body.classList.remove("block-scroll");
});
