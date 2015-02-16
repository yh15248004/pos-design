var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ReductionHouse = require('../promotion/reduction-house');
var ItemDiscount = require('../promotion/item-discount');
var BrandDiscount = require('../promotion/brand-discount');
var WholeReduction = require('../promotion/whole-reduction');

function StrategyOne() {
    this.savingTotal = 0;
}
StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

StrategyOne.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    promotionInfo += this.getItemDiscountInfo(cartItems);
    promotionInfo += this.getBrandDiscountInfo(cartItems);
    promotionInfo += this.getWholeReductionInfo(cartItems);

    return promotionInfo;
};

StrategyOne.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyOne.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyOne.wholeReduction = function() {
    return new ReductionHouse('', 100, 3);
};

StrategyOne.prototype.getWholeReductionInfo = function(cartItems) {
    var result = '';

    var newCartItems = this.findWholeReductionCartItem(cartItems, '康师傅方便面');
    var totalMoney = this.getNoPromotionSubtotal(newCartItems);
    var wholeReduction = new WholeReduction(StrategyOne.wholeReduction().reachPoint, StrategyOne.wholeReduction().reduceMoney, totalMoney);

    if(wholeReduction.getPromotionMoney() !== 0) {
        this.savingTotal += wholeReduction.getPromotionMoney();
        result = this.buildInfo(wholeReduction.buildPromotionName(), wholeReduction.getPromotionMoney());
    }

    return result;
};

StrategyOne.prototype.findWholeReductionCartItem = function(cartItems, name) {
    return _.filter(cartItems, function(cartItem) {
        return cartItem.getName() !== name && !cartItem.isPromotion;
    });
};

StrategyOne.prototype.getBrandDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountBrands = this.findBrands(cartItems, StrategyOne.brands());
    _.forEach(discountBrands, function(discountBrand) {
        discountInfo += _this.buildBrandDiscountInfo(cartItems, discountBrand);
    });
    return discountInfo;
};

StrategyOne.prototype.buildBrandDiscountInfo = function(cartItems, discountBrand) {

    var newCartItems = _.filter(cartItems, function(cartItem) {
        return cartItem.getBrand() === discountBrand.name;
    });

    var totalMoney = this.getNoPromotionSubtotal(newCartItems);

    var brandDiscount = new BrandDiscount(discountBrand.rate, totalMoney, discountBrand.name);
    this.setBrandPromotion(newCartItems);
    this.savingTotal += brandDiscount.getPromotionMoney();

    return this.buildInfo(brandDiscount.buildPromotionName(), brandDiscount.getPromotionMoney());
};

StrategyOne.prototype.getItemDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountItems = this.findItems(cartItems, StrategyOne.items());
    _.forEach(discountItems, function(discountItem) {
        discountInfo += _this.buildItemDiscountInfo(cartItems, discountItem);
    });

    return discountInfo;
};

StrategyOne.prototype.buildItemDiscountInfo = function(cartItems, discountItem) {
    var result = '';
    var cartItem = _.find(cartItems, function(cartItem) {
        return cartItem.getName() === discountItem.name;
    });

    if(!this.isSyndrome(cartItem, StrategyOne.brands())) {
        var itemDiscount = new ItemDiscount(discountItem.rate, cartItem.getSubtotal(), discountItem.name);
        cartItem.isPromotion = true;
        this.savingTotal += itemDiscount.getPromotionMoney();
        result += this.buildInfo(itemDiscount.buildPromotionName(), itemDiscount.getPromotionMoney());
    }

    return result;
};

StrategyOne.prototype.isSyndrome = function(cartItem, brandItems) {
    return _.any(brandItems, function(brandItem) {
        return brandItem.name === cartItem.getBrand();
    });
};

module.exports = StrategyOne;