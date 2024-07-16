const Database = require("./Database")
const Author = require("./entities/Author")
const User = require("./entities/User")
const Order = require("./entities/Order")
const Book = require("./entities/Book")
const Poster = require("./entities/Book")

module.exports = class App {
    static #database = new Database()

    createUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
       return App.#database.find('users')
    }


    createAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveUser(author)
    }

    getAuthors(){
        return App.#database.find('authors')
    }
    
    createBook(title, synopsis, genre, pages, author, description, price, inStock){
        const book = new Book(title, synopsis, genre, pages, author, description, price, inStock)
        App.#database.saveBook(book)
    }

    addBook(bookName, quantity) {
        App.#database.addBooksToStack(bookName, quantity)
    }

    getBooks() {
        return App.#database.find('books')
    }

        
    createPoster(name, description, height, width, price, inStock){
        const poster = new Poster(name, description, height, width, price, inStock)
        App.#database.savePoster(poster)
    }

    addPoster(postername, quantity) {
        App.#database.addPostersToStack(postername, quantity)
    }

    getPosters() {
        return App.#database.find('Poster')
    }

    createOrder(items, user) {
        const order = new Order(items, user)
        App.#database.saveOrder(order)
        order.data.items.forEach(({product, quantity}) => {
            if(product instanceof Book) {
                App.#database.removeBookFromStock(product.name, quantity)
            } else if (product instanceof Poster) {
                App.#database.removePosterFromStock(product.name, quantity)
            }
        })
    }

    getOrders() {
        return App.#database.find('orders')
    }

    showDatabase(){
        App.#database.showStorage()
    }
}