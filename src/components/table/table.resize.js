import { $ } from "../../core/dom";


export const resizerFunc = (event) => {
    const $rezirer = $(event.target)
    const $parent = $rezirer.closest('[data-type="rezible"]')
    const coord = $parent.getCoord()
    const resizeType = $rezirer.$el.dataset.resize
    const index = $parent.$el.dataset.index
    const $cells = document.querySelectorAll(`[data-index="${index}"]`)
    const resizeCssWitdh = resizeType === 'col' ? 'bottom' : 'right'
    const resizeCssPosition = resizeType === 'col' ? 'right' : 'bottom'
   if(resizeType){
    $rezirer.css({
        [resizeCssWitdh]: '-5000px',
        opacity: 1
    })
    let resize;

    if(resizeType === 'col'){
        document.onmousemove = e => {  
            resize = (coord.width + (e.x - coord.right))
            $rezirer.css({right: (coord.width -resize) + 'px'})
        }
    }else{
        document.onmousemove = e => {
            resize = (e.y - coord.bottom)
            $rezirer.css({bottom:  -resize + 'px'})
        }
        
    }

    document.onmouseup = e => {
        document.onmousemove = null;
        document.onmouseup = null;
        if(resizeType === 'col'){
            $parent.css({width: resize})
            $cells.forEach(i => {i.style.width = resize + 'px'}) 
        }else{
            $parent.css({height: coord.height + resize + 'px'})
        }
        $rezirer.css({
            [resizeCssWitdh]: '0',
            [resizeCssPosition]: '0',
            opacity: 0
        })
    }
   }

}