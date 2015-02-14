var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ReductionHouse = require('../promotion/reduction-house');
var ItemDiscount = require('../promotion/item-discount');
var BrandDiscount = require('../promotion/brand-discount');
var ItemReduction = require('../promotion/item-reduction');
var BrandReduction = require('../promotion/brand-reduction');

function StrategyTwo() {
    this.savingTotal = 0;
}
StrategyTwo.prototype = Object.create(Strategy.prototype);
StrategyTwo.prototype.constructor = StrategyTwo;

StrategyTwo.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    promotionInfo += this.getItemDiscountInfo(cartItems);
    promotionInfo += this.getBrandDiscountInfo(cartItems);
    promotionInfo += this.getBrandReductionInfo(cartItems);

    return promotionInfo;
};

StrategyTwo.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyTwo.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyTwo.reductionItems =function() {
    return [new ReductionHouse('云山荔枝', 100, 5)];
};

StrategyTwo.reductionBrands =function() {
    return [new ReductionHouse('康师傅', 100, 2)];
};

StrategyTwo.prototype.getItemReductionInfo = function(cartItems) {
    var _this = this;
    var reductionInfo = '';
    var reductionItems = this.findItems(cartItems, StrategyTwo.reductionItems());
    _.forEach(reductionItems, function(reductionItem) {
        reductionInfo += _this.buildItemReductionInfo(cartItems, reductionItem);
    });

    return reductionInfo;
};

StrategyTwo.prototype.getBrandReductionInfo = function(cartItems) {

    var _this = this;
    var reductionInfo = '';
    var reductionBrands = this.findBrands(cartItems, StrategyTwo.reductionBrands());
    _.forEach(reductionBrands, function(reductionBrand) {
        reductionInfo += _this.buildBrandReductionInfo(cartItems, reductionBrand);
    });

    return reductionInfo;
};

StrategyTwo.prototype.buildBrandReductionInfo = function(cartItems, reductionBrand) {
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

StrategyTwo.prototype.getBrandDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountBrands = this.findBrands(cartItems, StrategyTwo.brands());
    _.forEach(discountBrands, function(discountBrand) {
        discountInfo += _this.buildBrandDiscountInfo(cartItems, discountBrand);
    });
    return discountInfo;
};

StrategyTwo.prototype.buildBrandDiscountInfo = function(cartItems, discountBrand) {

    var newCartItems = _.filter(cartItems, function(cartItem) {
        return cartItem.getBrand() === discountBrand.name && !cartItem.isPromotion;
    });

    var totalMoney = this.getNoPromotionSubtotal(newCartItems);

    var brandDiscount = new BrandDiscount(discountBrand.rate, totalMoney, discountBrand.name);
    this.setBrandPromotion(newCartItems);
    this.savingTotal += brandDiscount.getPromotionMoney();

    return this.buildInfo(brandDiscount.buildPromotionName(), brandDiscount.getPromotionMoney());
};


StrategyTwo.prototype.getItemDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountItems = this.findItems(cartItems, StrategyTwo.items());
    _.forEach(discountItems, function(discountItem) {
        discountInfo += _this.buildItemDiscountInfo(cartItems, discountItem);
    });

    return discountInfo;
};

StrategyTwo.prototype.buildItemDiscountInfo = function(cartItems, discountItem) {
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

module.exports = StrategyTwo;