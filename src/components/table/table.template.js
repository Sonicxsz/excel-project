



function createRow(ind, content){
    return `
    <div class="row">
        <div class="row-info">${ind ? ind : ''}</div>
        <div class="row-data">${content}</div>
                    
    </div>
    `
}

function createCell(){
    return `
        <div class="cell" contenteditable></div>
    `
}

function createColumn(cont){
  return `
  <div class="column">
    ${cont}
  </div>
  `
}

const CODES = {
    A: 65,
    Z: 90
}


export function createTable(rowsCount = 30) {
    const colsCount = CODES.Z - CODES.A +1
    const row = []

    const cols = new Array(colsCount)
        .fill('')
        .map((i, ind) => String.fromCharCode(CODES.A + ind))
        .map(i => createColumn(i))
        .join('')

        row.push(createRow(null, cols))
    for(let i = 0; i < rowsCount; i++){
        const cels = new Array(colsCount)
            .fill('')
            .map(createCell)
            .join('')
        row.push(createRow(i + 1, cels))
        
        
    }
    return row.join('')
}