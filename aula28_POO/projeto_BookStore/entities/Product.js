module.exports = class Product {
    constructor(name, description, price, inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addtoStock(quantity) {
        this.inStock += quantity
    }

    removeFromStock(quantity) {
        this.inStock -= quantity
    }
}