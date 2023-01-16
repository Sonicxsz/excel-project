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
    text(text){
        if(typeof text === 'string'){
            this.$el.textContent = text
            return this
        }

        if(this.$el.tagName.toLowerCase() === 'input'){
            return this.$el.value = text
        }

        return this.$el.textContent
        
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

    id(parse){
        if(parse){
            const parsed = this.id().split(':')

            return {
                row: +parsed[0],
                col: +parsed[1]
            }
        }
        return this.$el.dataset.id
    }

    data(){
        return this.$el.dataset
    }
    focus(){
        this.$el.focus()
        return this
    }

    append(node){
        if(Element.prototype.append){
            this.$el.append(node.$el)
        }else{
            this.$el.appendChild(node.$el)
        }
    }

    addClass(className){
        this.$el.classList.add(className)
        return this
    }
    removeClass(className){
        this.$el.classList.remove(className)
        return this
    }

    closest(selector){
        return $(this.$el.closest(selector))
    }

    find(selector){
        return $(this.$el.querySelector(selector))
    }
  

    css(styles={}){
        Object.keys(styles).forEach(key => {
            this.$el.style[key] = styles[key]
            
        })
        return this
    }

    getCoord(){
        return this.$el.getBoundingClientRect()
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
