import { $ } from "../../core/dom"

export class Excel {
    constructor(selector, options){
        this.$el = $(selector)
        this.components = options.components || []
    }

    getRoot(){
        const $root = $.create('div', 'excel')
        this.components = this.components.map(Comp => {
            const $el = $.create('div', Comp.ClassName)
            const Component = new Comp($el)
            $el.html(Component.toHtml())
            $root.append($el)
            return Component
        });
        return $root
    }

    render(){
        this.$el.append(this.getRoot())
        this.components.forEach(comp => {
            comp.init()
        });
    }
}


