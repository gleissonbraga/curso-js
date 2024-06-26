function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Escalar " + name + " como " + position + " ?")

    if(confirmation) {
        const teamList = document.getElementById('teamList')
        const playerItem = document.createElement('li')
        playerItem.id = 'player-' + number
        playerItem.innerText = position + ", " + name + " (" + number + ")"
        teamList.appendChild(playerItem)

        DocumentFragment.getElementById('position').value = ''
        DocumentFragment.getElementById('name').value = ''
        DocumentFragment.getElementById('number').value = ''
    }
}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + " ?")

    if(confirmation){
        //outra forma de remover sem o elemento pai
        //playerToRemove.remove()

        document.getElementById('teamList').removeChild(playerToRemove)
        document.getElementById('numberToRemove').value = ''
    }
}