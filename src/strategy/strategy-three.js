var Strategy = require('./strategy');

function StrategyThree() {
}
StrategyThree.prototype = Object.create(Strategy.prototype);
StrategyThree.prototype.constructor = StrategyThree;

module.exports = StrategyThree;