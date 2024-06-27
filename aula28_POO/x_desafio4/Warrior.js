const Character = require("./Character")

class Warrior extends Character {
    constructor(name, health_points, attack_points, defense_points, shield_points){
        super(name, health_points, attack_points, defense_points)
        this.shield_points = shield_points
        this.stance = 'attacking'
    }


    attack(targetCharacter){
        if(this.stance === "attacking") {
            // utilizando método de character
            super.attack(targetCharacter)
        }
    }

    switchStance(){
        if(this.stance === "attacking") {
            this.stance = 'defending'
            this.defense_points += this.shield_points
        } else {
            this.stance = 'attacking'
            this.defense_points -= this.shield_points
        }
    }

}


module.exports = Warrior