var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ItemDiscount = require('../promotion/item-discount');

function StrategyOne() {
}
StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

StrategyOne.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';
    promotionInfo += StrategyOne.getItemDiscountInfo(cartItems);

    return promotionInfo;
};

StrategyOne.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyOne.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyOne.getBrandDiscountInfo = function(cartItems) {
    var discountInfo = '';
    var discountBrands = Strategy.findDiscountBrands(cartItems, StrategyOne.brands());
    _.forEach(discountBrands, function(discountBrand) {

    });
    return discountInfo;
};

StrategyOne.getItemDiscountInfo = function(cartItems) {
    var discountInfo = '';
    var discountItems = Strategy.findDiscountItems(cartItems, StrategyOne.items());
    _.forEach(discountItems, function(discountItem) {
        discountInfo += StrategyOne.buildItemDiscountInfo(cartItems, discountItem);
    });

    return discountInfo;
};

StrategyOne.buildItemDiscountInfo = function(cartItems, discountItem) {
    var result = '';

    var cartItem = _.find(cartItems, function(cartItem) {
        return cartItem.getName() === discountItem.name;
    });

    if(!StrategyOne.isSyndrome(cartItem, StrategyOne.brands())) {
        var itemDiscount = new ItemDiscount(discountItem.rate, cartItem.getSubtotal(), discountItem.name);
        cartItem.promotionMoney = itemDiscount.getPromotionMoney();
        result += Strategy.buildInfo(itemDiscount.buildPromotionName(), itemDiscount.getPromotionMoney());
    }

    return result;
};

StrategyOne.isSyndrome = function(cartItem, brandItems) {
    return _.any(brandItems, function(brandItem) {
        return brandItem.name === cartItem.getBrand();
    });
};

module.exports = StrategyOne;