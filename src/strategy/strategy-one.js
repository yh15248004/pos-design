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
        itemDiscount.buildPromotionName();
        itemDiscount.getPromotionMoney();
        cartItem.promotionMoney = itemDiscount.getPromotionMoney();
    }

    return result;
};

StrategyOne.isSyndrome = function(cartItem, brandItems) {
    return _.any(brandItems, function(brandItem) {
        return brandItem.name === cartItem.getBrand();
    });
};

StrategyOne.findDiscountItems = function(cartItems) {
    var discountItems = [];

    _.forEach(cartItems, function(cartItem){
        var discountItem = _.find(StrategyOne.items(), function(discountItem){
            return discountItem.name === cartItem.getName();});
        if(!!discountItem) {discountItems.push(discountItem);}
    });

    return discountItems;
};

module.exports = StrategyOne;