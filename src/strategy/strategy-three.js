var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ReductionHouse = require('../promotion/reduction-house');
var ItemDiscount = require('../promotion/item-discount');
var BrandDiscount = require('../promotion/brand-discount');
var ItemReduction = require('../promotion/item-reduction');
var BrandReduction = require('../promotion/brand-reduction');
var WholeReduction = require('../promotion/whole-reduction');

function StrategyThree() {
    this.savingTotal =0;
}
StrategyThree.prototype = Object.create(Strategy.prototype);
StrategyThree.prototype.constructor = StrategyThree;

StrategyThree.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    promotionInfo += this.getItemDiscountInfo(cartItems);
    promotionInfo += this.getBrandDiscountInfo(cartItems);
    promotionInfo += this.getBrandReductionInfo(cartItems);
    promotionInfo += this.getWholeReductionInfo(cartItems);

    return promotionInfo;
};

StrategyThree.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyThree.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyThree.reductionBrands =function() {
    return [new ReductionHouse('康师傅', 100, 2)];
};

StrategyThree.wholeReduction = function() {
    return new ReductionHouse('', 100, 5);
};

StrategyThree.prototype.getWholeReductionInfo = function(cartItems) {
    var result = '';

    var newCartItems = this.findWholeReductionCartItem(cartItems, '云山苹果');
    var totalMoney = this.getNoPromotionSubtotal(newCartItems) - this.savingTotal;
    var wholeReduction = new WholeReduction(StrategyThree.wholeReduction().reachPoint, StrategyThree.wholeReduction().reduceMoney, totalMoney);

    if(wholeReduction.getPromotionMoney() !== 0) {
        this.savingTotal += wholeReduction.getPromotionMoney();
        result = this.buildInfo(wholeReduction.buildPromotionName(), wholeReduction.getPromotionMoney());
    }

    return result;
};

StrategyThree.prototype.findWholeReductionCartItem = function(cartItems, name) {
    return _.filter(cartItems, function(cartItem) {
        return cartItem.getName() !== name;
    });
};

StrategyThree.prototype.getBrandReductionInfo = function(cartItems) {

    var _this = this;
    var reductionInfo = '';
    var reductionBrands = this.findBrands(cartItems, StrategyThree.reductionBrands());
    _.forEach(reductionBrands, function(reductionBrand) {
        reductionInfo += _this.buildBrandReductionInfo(cartItems, reductionBrand);
    });

    return reductionInfo;
};

StrategyThree.prototype.buildBrandReductionInfo = function(cartItems, reductionBrand) {
    var result = '';

    var newCartItems = _.filter(cartItems, function(cartItem) {
        return cartItem.getBrand() === reductionBrand.name;
    });

    var totalMoney = this.getNoPromotionSubtotal(newCartItems);

    var brandReduction = new BrandReduction(reductionBrand.reachPoint, reductionBrand.reduceMoney, totalMoney, reductionBrand.name);
    this.setBrandPromotion(newCartItems);
    this.savingTotal += brandReduction.getPromotionMoney();
    if(brandReduction.getPromotionMoney().toFixed(0) !== '0') {
        result = this.buildInfo(brandReduction.buildPromotionName(), brandReduction.getPromotionMoney());
    }
    return result;
};

StrategyThree.prototype.getBrandDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountBrands = this.findBrands(cartItems, StrategyThree.brands());
    _.forEach(discountBrands, function(discountBrand) {
        discountInfo += _this.buildBrandDiscountInfo(cartItems, discountBrand);
    });
    return discountInfo;
};

StrategyThree.prototype.buildBrandDiscountInfo = function(cartItems, discountBrand) {

    var newCartItems = _.filter(cartItems, function(cartItem) {
        return cartItem.getBrand() === discountBrand.name;
    });

    var totalMoney = this.getNoPromotionSubtotal(newCartItems) - this.savingTotal;

    var brandDiscount = new BrandDiscount(discountBrand.rate, totalMoney, discountBrand.name);
    this.setBrandPromotion(newCartItems);
    this.savingTotal += brandDiscount.getPromotionMoney();

    return this.buildInfo(brandDiscount.buildPromotionName(), brandDiscount.getPromotionMoney());
};


StrategyThree.prototype.getItemDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountItems = this.findItems(cartItems, StrategyThree.items());
    _.forEach(discountItems, function(discountItem) {
        discountInfo += _this.buildItemDiscountInfo(cartItems, discountItem);
    });

    return discountInfo;
};

StrategyThree.prototype.buildItemDiscountInfo = function(cartItems, discountItem) {
    var result = '';
    var cartItem = _.find(cartItems, function(cartItem) {
        return cartItem.getName() === discountItem.name;
    });

    var itemDiscount = new ItemDiscount(discountItem.rate, cartItem.getSubtotal(), discountItem.name);
    cartItem.isPromotion = true;
    this.savingTotal += itemDiscount.getPromotionMoney();
    result += this.buildInfo(itemDiscount.buildPromotionName(), itemDiscount.getPromotionMoney());

    return result;
};

module.exports = StrategyThree;