var Strategy = require('./strategy');

function StrategyTwo() {
    this.savingTotal = 0;
}
StrategyTwo.prototype = Object.create(Strategy.prototype);
StrategyTwo.prototype.constructor = StrategyTwo;

module.exports = StrategyTwo;