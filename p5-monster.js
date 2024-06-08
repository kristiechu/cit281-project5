module.exports = class Monster {
    constructor({
        monsterName = "Unknown",
        minimumLife = 0,
        currentLife = 100,
} = {}) {
    this.monsterName = monsterName;
    this.minimumLife = minimumLife;
    this.currentLife = currentLife;
    this.isAlive = currentLife >= minimumLife;
    }

updateLife = (lifeChangeAmount = 0) => {
    this.currentLife += lifeChangeAmount;
    this.currentLife = this.currentLife < 0 ? 0 : this.currentLife;
    this.isAlive = this.currentLife < this.minimumLife ? false : true;
}

randomLifeDrain = (minLifeDrain, maximumLifeDrain) => {
    let lifeDrain = getRandomInteger(minLifeDrain, maximumLifeDrain + 1);
    this.updateLife(-lifeDrain);
    console.log(`${this.monsterName} random power drain of ${lifeDrain}`);
}
};

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
    }
