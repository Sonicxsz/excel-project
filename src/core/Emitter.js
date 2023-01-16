export class Emitter {
    constructor(){
        this.listeners = {}
    }

    emit(event, ...arg){
        
        if(!Array.isArray(this.listeners[event])){
            return false
        }
        this.listeners[event].forEach(listener => {
            listener(...arg)
        })
    }

    subscribe(eventName, fn){
        this.listeners[eventName] =  this.listeners[eventName] || [],
        this.listeners[eventName].push(fn)

        return () => {
            this.listeners[eventName] = this.listeners[eventName]
                    .filter(list => list !== fn)
        }
    }
}
