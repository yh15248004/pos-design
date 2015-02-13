var Strategy = require('./strategy');

function StrategyThree() {
    this.savingTotal =0;
}
StrategyThree.prototype = Object.create(Strategy.prototype);
StrategyThree.prototype.constructor = StrategyThree;

module.exports = StrategyThree;