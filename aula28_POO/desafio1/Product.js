class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }

    addToStock(num) {
        return this.inStock += num
    }

    calculateDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const p1 = new Product("Pen", "Blue", "200", "20")

console.log(p1)
console.log(p1.addToStock(20))
console.log(p1.calculateDiscount(10))
