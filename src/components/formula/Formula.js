import { ExcelComponent } from "../../core/ExcelComponent";

export  class Formula extends ExcelComponent {
    static ClassName = 'excel_formula'
    constructor($root, options){
        super($root, {
            name:'Formula',
            listeners: ['input', 'keydown'],
            ...options
        })
    }
    toHtml(){
        return `
        <div class="info">fx</div>
        <div id="formula_text" class="input" contenteditable spellcheck="false"></div>
        `
    }
    init(){
        super.init()
        const $formula = this.$root.find('#formula_text')
        this.$on('Table:input', text => {
            $formula.text(text)
        })
        this.$on('Table:select', el => $formula.text(el.text()))
        this.$on('Table:click', el => $formula.text(el.text()))
    }

    onInput(event){
        const text = event.target.textContent
        this.$emit('formula:input', text)
    }
    onKeydown(event){
        if(event.key === 'Enter' || event.key === 'Tab'){
            event.preventDefault()
            this.$emit('formula:done')
        }
        
    }
}