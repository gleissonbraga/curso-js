const nameCharacter = prompt("Nome do personagem: ")
const powerAtack = parseFloat(prompt("Ataque do personagem: "))

const nameCharacterTwo = prompt("Nome personagem defensor: ")
let life = parseFloat(prompt("Pontos de vida: "))
let defense = parseFloat(prompt("Poder de defesa: "))
let shield = confirm("Tem escudo? ")

let damage = 0


if(powerAtack > defense && shield === false) {
    damage = powerAtack - defense
} else if (powerAtack > defense && shield === true) {
    damage = (powerAtack - defense) / 2
}

life -= damage

alert(nameCharacter + " Causou " + powerAtack + "pontos de dano em " + shield)
alert(
    nameCharacter + "\nPoder de ataque: " + powerAtack + "\n\n" + shield + "\nPontos de vida: " + life +
    "\nPoder de defesa: " + defense + "\nPossui escudo: " + shield
)