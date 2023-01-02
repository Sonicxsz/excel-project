import { ExcelComponent } from "../../core/ExcelComponent";

export  class Formula extends ExcelComponent {
    static ClassName = 'excel_formula'
    constructor($root){
        super($root, {
            name:'Formula',
            listeners: ['input', 'click']
        })
    }
    toHtml(){
        return `
        <div class="info">fx</div>
        <div class="input" contenteditable spellcheck="false"></div>
        `
    }

    onInput(event){
        console.log('formula', event)
        console.log(this.$root)
    }
    onClick(event){
        console.log('hello from formula')
    }
}