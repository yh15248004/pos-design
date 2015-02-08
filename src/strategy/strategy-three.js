var Strategy = require('./strategy');

function StrategyThree(cartItems) {
    Strategy.call(this, cartItems);
}
StrategyThree.prototype = Object.create(Strategy.prototype);
StrategyThree.prototype.constructor = StrategyThree;

module.exports = StrategyThree;