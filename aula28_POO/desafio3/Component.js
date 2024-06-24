
// export do es module
export class Component{
    #element = null
    constructor(tag, parent, options) {
        this.tag = tag
        this.parent = parent
        this.options = options
        this.build()
    }

    build() {
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.options)
        return this
    }

    render() {

    }
}

// PAREI NO VIDEO 14, MINUTO 7:10