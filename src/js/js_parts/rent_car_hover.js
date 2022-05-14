
// rentItem.forEach(item => {
//     item.addEventListener("mouseenter", ( event )  =>{
//         console.log(item.children[1].classList);
//         item.children[1].classList.add('rentTextBlock')
// })});
// rentItem.forEach( item => { 
//     item.addEventListener('mouseover', (event) => { // Step 2
//         console.log(event.target.className);
//         if (event.target.className === 'rent-type__aboute-item-text') { // Step 3
//             console.log('over text');
//         }      
//         if (event.target.className === 'rent-type__aboute-item-btn') { // Step 3
//             console.log('over btn');
//         }
//     })
// })


rentItem.forEach( item => { 
    const nodeArray = [...item.children]
    item.onmouseover = (e) => {
        nodeArray.map(item=>{
            item.className === 'rent-type__aboute-item-text' ?
                item.classList.add(`rentTextBlock`) : `` ;
        })
    }
    item.onmouseout = (e) => {
        nodeArray.map(item=>{
            item.classList.contains('rentTextBlock') ?
                item.classList.remove(`rentTextBlock`) : `` ;
        })}
    }
)




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