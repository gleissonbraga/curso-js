const Character = require("./Character")

class Mage extends Character{
    constructor(name, health_points, attack_points, defense_points, magic_points){
        super(name, health_points, attack_points, defense_points)
        this.magic_points = magic_points
    }

    attack(targetCharacter){
        targetCharacter.health_points -= (this.attack_points + this.magic_points) - targetCharacter.defense_points
    }

    heal(targetCharacter){
        targetCharacter.health_points += this.magic_points * 2
    }
}

module.exports = Mage