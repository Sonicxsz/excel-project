import { capitalize } from "./utils"

export class DomListener {
    constructor($root, listeners = []){
        if(!$root){
            throw new Error ('not provided root')
        }
        this.$root = $root
        this.listeners = listeners
    }

    initDomListerner(){
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            if(!this[method]){
                throw new Error(`Method ${method} is not implemented ${this.name} yet`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener, this[method])
        })
    }

    removeDomListener(){
        this.listeners.forEach(listener => {
            const method = getMethodName(listener)
            this.$root.off(listener, this[method])
        })
    }
}

function getMethodName (event){
    return 'on' + capitalize(event)
}