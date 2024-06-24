class Account {
    // declarando um atributo privado, jogando fora do construtor e dentro do construtor com #
    #password
    #balance = 0
    constructor(user) {
        this.email = user.email
        this.#password = user.password
    }

    //metodo para acessar o valor de balance
    getBalance(email, password) {
        if(this.#authenticate(email, password)){
            return this.#balance
        } else {
            return null
        }
    }

    // privando o método complicado
    #authenticate(email, password){
        return this.email === email && this.password === password
    }
}

const user = {
    email: "gleisson@gmail.com",
    password: "123456"
}

const myAccount = new Account(user)

console.log(myAccount)
console.log(myAccount.getBalance("gleisson@gmail.com", 123456))