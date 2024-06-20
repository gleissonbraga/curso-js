class User {
    constructor (fullname, email, password, ){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email, password) {
        if(this.email == email && this.password == password) {
            console.log(`${this.fullname} login confirmado!`)
        } else {
            console.log("Email ou senha inválido")
        }
    }
}


const user1 = new User("Gleisson Braga", "gleisson@gmail.com", "123456")

user1.login("gleisson@gmail.com", "1234")