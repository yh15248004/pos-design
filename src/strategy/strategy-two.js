var Strategy = require('./strategy');

function StrategyTwo() {
    this.savingTotal = 0;
}
StrategyTwo.prototype = Object.create(Strategy.prototype);
StrategyTwo.prototype.constructor = StrategyTwo;

StrategyOne.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    return promotionInfo;
};

module.exports = StrategyTwo;