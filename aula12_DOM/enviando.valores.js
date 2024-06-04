function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    // utilizado para ver os valores das variáveis no console
    //console.log({ username, password, passwordConfirmation})

    if(password === passwordConfirmation) {
        alert("Usuário " + " registrado!")
    } else {
        alert("As senhas não conferem.")
        // const passwordIncorrect = document.createElement('p')
        // passwordIncorrect.innerText = "As senhas não conferem."
    }
}