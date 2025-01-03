class Miner {
    constructor(name) {
        this.name = name;
        this.coins = 0;
        this.upgradeLevel = 1;
    }

    mine() {
        const minedCoins = Math.floor(Math.random() * 10 * this.upgradeLevel) + 1;
        this.coins += minedCoins;
        console.log(`${this.name} mined ${minedCoins} coins. Total coins: ${this.coins}`);
    }

    sellCoins() {
        console.log(`${this.name} sold ${this.coins} coins.`);
        this.coins = 0;
    }

    upgradeMiner() {
        this.upgradeLevel++;
        console.log(`${this.name} upgraded to level ${this.upgradeLevel}.`);
    }

    displayStats() {
        console.log(`Miner: ${this.name}, Coins: ${this.coins}, Upgrade Level: ${this.upgradeLevel}`);
    }
}

const miner = new Miner('Pirate Miner');
setInterval(() => miner.mine(), 1000);

// Example usage
setTimeout(() => miner.sellCoins(), 5000);
setTimeout(() => miner.upgradeMiner(), 10000);
setTimeout(() => miner.displayStats(), 15000);