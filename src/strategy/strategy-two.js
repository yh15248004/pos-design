var Strategy = require('./strategy');

function StrategyTwo(cartItems) {
    Strategy.call(this, cartItems);
}
StrategyTwo.prototype = Object.create(Strategy.prototype);
StrategyTwo.prototype.constructor = StrategyTwo;

module.exports = StrategyTwo;