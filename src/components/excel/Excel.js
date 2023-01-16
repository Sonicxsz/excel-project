import { $ } from "../../core/dom"
import { Emitter } from "../../core/Emitter"
export class Excel {
    constructor(selector, options){
        this.$el = $(selector)
        this.components = options.components || []
        this.emitter = new Emitter()
    }

    getRoot(){
        const $root = $.create('div', 'excel')
        const componentOptions = {emitter:this.emitter}
        this.components = this.components.map(Comp => {
            const $el = $.create('div', Comp.ClassName)
            const Component = new Comp($el, componentOptions)
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

    destroy(){
        this.components.forEach(comp => comp.destroy())
    }
}


