var Strategy = require('./strategy');

function NoStrategy() {
    this.savingTotal = 0;
}

NoStrategy.prototype = Object.create(Strategy.prototype);
NoStrategy.prototype.constructor = NoStrategy;

NoStrategy.prototype.getPromotionInfo = function(cartItems) {
    return '无';
};

module.exports = NoStrategy;