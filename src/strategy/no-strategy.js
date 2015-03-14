var Strategy = require('./strategy');

function NoStrategy() {
    Strategy.call(this);
}

NoStrategy.prototype = Object.create(Strategy.prototype);
NoStrategy.prototype.constructor = NoStrategy;

NoStrategy.prototype.getPromotionInfo = function(cartItems) {
    return '无';
};

module.exports = NoStrategy;