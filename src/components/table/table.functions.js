import { range } from "../../core/utils"

export const isCell = (event) => {
    return event.target.dataset.type === 'cell'
}

export const matrix = ($current, $target) => {
    const current = $current.id(true)
    const target = $target.id(true)

    const cols = range(current.col, target.col)
               const rows = range(current.row, target.row)
                
               return cols.reduce((acc, col) => {
                rows.forEach(i => {
                    acc.push(`${i}:${col}`)
                })
                return acc
               },[])        

}

export const nextSelector = (key, {row, col}) =>{
    switch(key){
        case 'ArrowDown':
        case 'Enter':
            row++
            break;
        case 'ArrowRight':
        case 'Tab': 
        col++
            break;
        case 'ArrowLeft':     
            col = col > 0 ? --col : 0
            break;
        case 'ArrowUp': 
            row = row > 0 ? --row : row

    }

    return `[data-id="${row}:${col}"]`
}