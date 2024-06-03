function addInput() {
    const ul = document.getElementById('inputs')

    // cria um novo elemento no HTML
    const newLi = document.createElement('li')
    newLi.className = 'list-item'
    
    // adiciona texto no elemento criado
    newLi.innerText = 'Novo input: '

    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'
    
    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}