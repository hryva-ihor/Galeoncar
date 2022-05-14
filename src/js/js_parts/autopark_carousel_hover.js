
    autoparkCarouselItem.forEach( item => { 
        const nodeArray = [...item.children]
        item.onmouseover = (e) => {
            nodeArray.map(item=>{
                item.className === 'autopark__carousel-item-text' ?
                    item.classList.add(`autoparkCarouselItemTextBlock`) : `` ;
            })
        }
        item.onmouseout = (e) => {
            nodeArray.map(item=>{
                item.classList.contains('autoparkCarouselItemTextBlock') ?
                    item.classList.remove(`autoparkCarouselItemTextBlock`) : `` ;
            })}
        }
    )

