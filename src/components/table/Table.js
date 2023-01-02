import { ExcelComponent } from "../../core/ExcelComponent";
import { createTable } from "./table.template";
export  class Table extends ExcelComponent {
    static ClassName = 'excel_table'

    toHtml(){
        return createTable()
    }
}