import { resizerFunc } from "./table.functions";
import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
export  class Table extends ExcelComponent {
    static ClassName = 'excel_table'
    constructor($root){
        super($root, {
            name:'Table',
            listeners: ['mousedown']
        })
    }
    toHtml(){
        return createTable()
    }

    onMousedown(event){
        resizerFunc(event)
    }
    
  
}