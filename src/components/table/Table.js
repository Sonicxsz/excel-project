import { $ } from "../../core/dom";
import { resizerFunc } from "./table.resize";
import { isCell, matrix, nextSelector } from "./table.functions";
import { ExcelComponent } from "../../core/ExcelComponent";
import { TableSelection } from "./TableSelection";
import { createTable } from "./table.template";

export  class Table extends ExcelComponent {
    static ClassName = 'excel_table'

    constructor($root, options){
        super($root, {
            name:'Table',
            listeners: ['mousedown', 'keydown', 'input'],
            ...options
        })
    }
    toHtml(){
        return createTable()
    }
    prepare(){
        this.selection = new TableSelection()
    }
    init(){
        super.init()
        const $cell = this.$root.find('[data-id="0:1"]')
        this.selection.select($cell)
        this.$on('formula:input', text => {
           this.selection.current.text(text)
        })
        this.$on('formula:done', () => {
                this.selection.current.focus()
            
        })
        this.selectCell($cell)
    }
    selectCell($cell){
        this.$emit('Table:select', $cell)
    }

   
    onMousedown(event){
        resizerFunc(event)
        if(isCell(event)){
            const $cell = $(event.target)
            this.$emit('Table:click', $cell)
            if(event.shiftKey){
               const $chosedCells = matrix(this.selection.current, $cell)
                        .map(id => {
                            return this.$root.find(`[data-id="${id}"]`)
                        })

               this.selection.selectGroup($chosedCells)  

            }else{
                this.selection.select($cell)
            }
            
        }
    }

    onKeydown(event){
        const key = event.key
        const keys = [
            'ArrowDown',
            'Enter',
            'ArrowRight',
            'Tab',
            'ArrowLeft',
            'ArrowUp'
        ]
        if(keys.includes(key) && !event.shiftKey){
            const id = this.selection.current.id(true)
            
            const $next = this.$root.find(nextSelector(key, id))
            this.selection.select($next)
            this.selectCell($next)
        }
      
        
    }
   
    onInput(event){
        const text = event.target.textContent
        this.$emit('Table:input', text)
    }
   

    
  
}





