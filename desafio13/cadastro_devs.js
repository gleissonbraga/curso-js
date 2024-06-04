function addInput() {

    const ul = document.getElementById('techs')

    const newLi = document.createElement('li')
    newLi.className = 'list'
    newLi.innerText = 'Nova tecnologia'


    const newInput = document.createElement('input')
    newInput.type = 'text'
    newInput.name = 'input'


    newLi.appendChild(newInput)
    ul.appendChild(newLi)
}