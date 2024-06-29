const Database = require("./Database")
const Author = require("./entit/Author")
const User = require("./entit/User")

module.exports = class App {
    static #database = new Database()

    creatUser(name, email, password){
        const user = new User(name, email, password)
        App.#database.saveUser(user)
    }

    getUsers(){
       return App.#database.find('users')
    }


    creatAuthor(name, nationality, bio){
        const author = new Author(name, nationality, bio)
        App.#database.saveUser(author)
    }

    getAuthors(){
        return App.#database.find('authors')
    }
    

}