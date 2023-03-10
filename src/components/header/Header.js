import { ExcelComponent } from "../../core/ExcelComponent";

export  class Header extends ExcelComponent {
    static ClassName = 'excel__header'
    constructor($root, options){
        super($root, {
            name: 'Header',
            ...options
        })
    }
    toHtml(){
        return `
            <input type="text" class="input" value="Новая таблица">
            <div>
                <div class="button">
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </div>
                <div class="button">
                    <span class="material-symbols-outlined">
                        logout
                    </span>
                </div>

            </div>
        `
    }
}