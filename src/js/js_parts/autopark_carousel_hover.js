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