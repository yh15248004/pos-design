var Strategy = require('./strategy');

function StrategyFour() {
    this.savingTotal = 0;
}
StrategyFour.prototype = Object.create(Strategy.prototype);
StrategyFour.prototype.constructor = StrategyFour;

module.exports = StrategyFour;