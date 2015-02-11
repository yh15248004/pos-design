var _ = require('lodash');
var Strategy = require('./strategy');

function StrategyOne() {
}
StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

StrategyOne.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    var discountCartItem = StrategyOne.getDiscountItem(cartItems);
    var discountBrandCartItems = StrategyOne.getBrandCartItems(cartItems);
    if(!StrategyOne.isSyndrome(discountCartItem, discountBrandCartItems)) {

    }

    return promotionInfo;
};

StrategyOne.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyOne.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyOne.getItemDiscountInfo = function(cartItems) {
    var discountInfo = '';
    var discountCartItem = StrategyOne.getDiscountItem(cartItems);
    if(!StrategyOne.isSyndrome(discountCartItem, StrategyOne.brands())) {

    }
    return discountInfo;
};

module.exports = StrategyOne;