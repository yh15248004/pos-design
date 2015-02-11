var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');

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
    var discountItems = StrategyOne.findDiscountItems(cartItems);
    _.forEach(discountItems, function(discountItem) {
        if(!StrategyOne.isSyndrome(discountItems, StrategyOne.brands())) {

        }
    });

    return discountInfo;
};

StrategyOne.findDiscountItems = function(cartItems) {
    var discountItems = [];
    _.forEach(cartItems, function(cartItem){
        discountItems.push(_.find(StrategyOne.items(), function(discountItem){
            return discountItem.name === cartItem.getName();
        }));
    });
    return discountItems;
};

module.exports = StrategyOne;