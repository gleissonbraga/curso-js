function register(ev) {
    console.log(ev)
    const username = ev.currentTarget.parentNode.children.username.value
    const password = ev.currentTarget.parentNode.children.password.value
    const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert("Usuário " + username + " registrado!")
    } else {
        alert("As senhas não conferem.")
    }
}


const button = document.getElementById('register-button')

button.addEventListener('click', register)


function removeEvent() {
    button.removeEventListener('click', register)
    alert("Events removed")
}

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)
})