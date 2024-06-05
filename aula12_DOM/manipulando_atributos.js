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

//PAREI NO VIDEO 18 NO MINUTO 8:53