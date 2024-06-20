//CRIANDO UMA CLASSE
class Book {

    // METODO CONSTRUTOR
    constructor(title, ) {
        this.title = title
        this.published = false
    }

    // CRIANDO METODOS
    publish() {
        this.published = true
    }
}

const eragon = new Book("Eragon")
const eldest = new Book("Eldest")

eragon.publish()

console.log(eragon)
console.log(eldest)


// VERIFICA SE A INSTANCIA "ERAGON" É REALMENTE DA CLASSE BOOK
console.log(eragon instanceof Book)