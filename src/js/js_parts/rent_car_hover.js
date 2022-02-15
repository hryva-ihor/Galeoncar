
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
        console.log(document.body.scrollHeight);
        console.log(window.pageYOffset); 
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