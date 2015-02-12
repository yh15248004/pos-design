var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ItemDiscount = require('../promotion/item-discount');
var BrandDiscount = require('../promotion/brand-discount');
var WholeReduction = require('../promotion/whole-reduction');

function StrategyOne() {
}
StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

StrategyOne.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    promotionInfo += StrategyOne.getItemDiscountInfo(cartItems);
    promotionInfo += StrategyOne.getBrandDiscountInfo(cartItems);
    promotionInfo += StrategyOne.getWholeReductionInfo(cartItems);

    return promotionInfo;
};

StrategyOne.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyOne.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyOne.getWholeReductionInfo = function(cartItems) {
    var result = '';

    var newCartItems = StrategyOne.findWholeReductionCartItem(cartItems, '康师傅方便面');
    var totalMoney = Strategy.getNoPromotionSubtotal(newCartItems);
    var wholeReduction = new WholeReduction(100, 3, totalMoney);

    if(wholeReduction.getPromotionMoney() !==0) {
        result = Strategy.buildInfo(wholeReduction.buildPromotionName(), wholeReduction.getPromotionMoney());
    }

    return result;
};

StrategyOne.findWholeReductionCartItem = function(cartItems, name) {
    return _.filter(cartItems, function(cartItem) {
        return cartItem.getName() !== name && cartItem.promotionMoney === 0;
    });
};

StrategyOne.getBrandDiscountInfo = function(cartItems) {
    var discountInfo = '';
    var discountBrands = Strategy.findDiscountBrands(cartItems, StrategyOne.brands());
    _.forEach(discountBrands, function(discountBrand) {
        discountInfo += StrategyOne.buildBrandDiscountInfo(cartItems, discountBrand);
    });
    return discountInfo;
};

StrategyOne.buildBrandDiscountInfo = function(cartItems, discountBrand) {

    var newCartItems = _.filter(cartItems, function(cartItem) {
        return cartItem.getBrand() === discountBrand.name;
    });

    var totalMoney = Strategy.getNoPromotionSubtotal(newCartItems);

    var brandDiscount = new BrandDiscount(discountBrand.rate, totalMoney, discountBrand.name);
    Strategy.setBrandPromotionMoney(newCartItems, brandDiscount.getPromotionMoney());

    return Strategy.buildInfo(brandDiscount.buildPromotionName(), brandDiscount.getPromotionMoney());
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