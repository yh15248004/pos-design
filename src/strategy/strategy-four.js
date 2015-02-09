var Strategy = require('./strategy');

function StrategyFour() {
}
StrategyFour.prototype = Object.create(Strategy.prototype);
StrategyFour.prototype.constructor = StrategyFour;

module.exports = StrategyFour;