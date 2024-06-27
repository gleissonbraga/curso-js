class Character {
    constructor (name, health_points, attack_points, defense_points) {
        this.name = name
        this.health_points = health_points
        this.attack_points = attack_points
        this.defense_points = defense_points
    }

    attack(targetCharacter) {
        targetCharacter.health_points -= this.attack_points - targetCharacter.defense_points
    }
}

module.exports = Character