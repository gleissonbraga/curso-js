const input = document.getElementById('input')

//mudando o texto do input
document.getElementById('value').addEventListener('click', function() {
    input.value = 'Olá, mundo!'
    
    console.log(input.value)
    console.log(input.getAttribute('value'))
})

// mudando input de "text" para "radio"
document.getElementById('type').addEventListener('click', function() {
    //input.type = input.type !== 'radio' ? 'radio' : 'text'
    input.setAttribute('type', 'radio')
})

// muda o texto do placeholder
document.getElementById('placeholder').addEventListener('click', function() {
    input.placeholder = 'Digite algo...'
})

// desabilita o input
document.getElementById('disable').addEventListener('click', function() {
    input.setAttribute('disabled', !input.disabled)
})


document.getElementById('data').addEventListener('click', function() {
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something é: " + data)
    input.dataset.somethingElse = 'algum outro valor'
    console.log("O valor do atributo data-something agora é: " + input.dataset.somethingElse)
})
