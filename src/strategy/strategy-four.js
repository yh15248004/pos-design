var Strategy = require('./strategy');

function StrategyFour(cartItems) {
    Strategy.call(this, cartItems);
}
StrategyFour.prototype = Object.create(Strategy.prototype);
StrategyFour.prototype.constructor = StrategyFour;

module.exports = StrategyFour;