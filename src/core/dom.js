class Dom {
    constructor(selector){
        this.$el = typeof selector === 'string' 
        ? document.querySelector(selector)
        : selector
    }

    html(html){
        if(typeof html === 'string'){
            this.$el.innerHTML = html
            return this
        }
        return this.$el.innerHTML.trim()
    }

    clear(){
        this.html('')
        return this
    }

    on(event, fn){
        this.$el.addEventListener(event, fn)
    }
    off(event, fn){
        this.$el.removeEventListener(event, fn)
    }

    append(node){
        if(Element.prototype.append){
            this.$el.append(node.$el)
        }else{
            this.$el.appendChild(node.$el)
        }
    }
}


const $ = (selector) => {
    return new Dom(selector)
}


$.create = (tagName, classes) => {
    const el = document.createElement(tagName)
    if(classes.length > 0)
    el.classList.add(classes)

    return $(el)
}


export {$}
