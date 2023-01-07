



function createRow(ind, content){
    const resize = ind ? '<div class="row-size" data-resize="row"></div>' : ''
    return `
    <div class="row" data-type="rezible">
        <div class="row-info">${ind ? ind : ''}
        ${resize}
        </div>
        <div class="row-data">${content}</div>
    </div>
    `
}

function createCell(_, index){
    return `
        <div class="cell" contenteditable data-index="${index}"></div>
    `
}

function createColumn(cont, ind){
  return `
  <div class="column" data-type="rezible" data-index="${ind}">
    ${cont}
    <div class="col-size" data-resize="col"></div>
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
        .map((i, ind) => createColumn(i, ind))
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