var Strategy = require('./strategy');

function StrategyTwo() {
}
StrategyTwo.prototype = Object.create(Strategy.prototype);
StrategyTwo.prototype.constructor = StrategyTwo;

module.exports = StrategyTwo;