import { DomListener } from "./DomListener"
export class ExcelComponent extends DomListener{
    constructor($root, options = {}){
        super($root, options.listeners)
        this.name = options.name || ''
        this.prepare()
        this.emitter = options.emitter
        this.subscribers = []
    }
    toHtml(){
        return ''
    }
    prepare(){
        
    }

    $emit(event, ...arg){
        this.emitter.emit(event, ...arg)
    }

    $on(event, fn){
        const unsub = this.emitter.subscribe(event, fn)
        this.subscribers.push(unsub)
    }

    init(){
        this.initDomListerner()
    }

    destroy(){
        this.removeDomListener()
        this.subscribers.forEach(unsub => unsub())
    }
}