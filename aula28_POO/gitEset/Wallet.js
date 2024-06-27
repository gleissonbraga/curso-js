class Wallet {
    #amount
    #username

    constructor() {
        this.#amount = 100.99 * 100 //10099 
    }

   // GETTERS
    get amount() {
        return this.#amount / 100
    }

    // amount() {
    //     return this.#amount / 100
    // }

    /// ************

    // SETTERS
    set username(newUserName){
        if(typeof newUserName === 'string') {
            this.#username = newUserName 
        } else {
            console.log('username must of type string')
        }
    }

    get username() {
        return this.#username
    }

}

const myWallet = new Wallet()

// GETTERS

// com getter que vem com get na frente não precisamos utilizar os parenteses
console.log(myWallet.amount)

// Sem a utilização do get precisamos passar os parenteses para que funcione
console.log(myWallet.amount())

// SETTERS

myWallet.username = 'Gleisson'
cponsole.log(myWallet.username)

// adicionando mais valores ao nome
myWallet.username += ' Braga'
cponsole.log(myWallet.username)

// realizando teste de nome em string
myWallet.username = True