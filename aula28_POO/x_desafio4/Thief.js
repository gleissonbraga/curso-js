const Character = require("./Character")

class Thief extends Character {
    attack(targetCharacter) {
        targetCharacter.health_points -= (this.attack_points - targetCharacter.defense_points) * 2
    }
}

module.exports = Thief