var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ReductionHouse = require('../promotion/reduction-house');
var ItemDiscount = require('../promotion/item-discount');
var BrandDiscount = require('../promotion/brand-discount');
var ItemReduction = require('../promotion/item-reduction');
var BrandReduction = require('../promotion/brand-reduction');
var WholeReduction = require('../promotion/whole-reduction');

function StrategyFour() {
    this.savingTotal = 0;
}
StrategyFour.prototype = Object.create(Strategy.prototype);
StrategyFour.prototype.constructor = StrategyFour;

StrategyFour.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    promotionInfo += this.getItemDiscountInfo(cartItems);
    promotionInfo += this.getBrandDiscountInfo(cartItems);
    promotionInfo += this.getItemReductionInfo(cartItems);
    //promotionInfo += this.getBrandReductionInfo(cartItems);
    //promotionInfo += this.getWholeDiscountInfo(cartItems);

    return promotionInfo;
};

StrategyFour.items = function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyFour.brands = function() {
    return [new DiscountHouse('可口可乐', 0.9)];
};

StrategyFour.reductionItems = function() {
    return [new ReductionHouse('果粒橙', 100, 5)];
};

StrategyFour.prototype.getItemReductionInfo = function(cartItems) {
    var _this = this;
    var reductionInfo = '';
    var reductionItems = this.findItems(cartItems, StrategyFour.reductionItems());
    _.forEach(reductionItems, function(reductionItem) {
        reductionInfo += _this.buildItemReductionInfo(cartItems, reductionItem);
    });

    return reductionInfo;
};

StrategyFour.prototype.buildItemReductionInfo = function(cartItems, reductionItem) {
    var result = '';
    var cartItem = _.find(cartItems, function(cartItem) {
        return cartItem.getName() === reductionItem.name;
    });

    var itemReduction = new ItemReduction(reductionItem.reachPoint, reductionItem.reduceMoney, cartItem.getSubtotal(), reductionItem.name);
    cartItem.isPromotion = true;
    this.savingTotal += itemReduction.getPromotionMoney();
    if(itemReduction.getPromotionMoney() !== 0) {
        result += this.buildInfo(itemReduction.buildPromotionName(), itemReduction.getPromotionMoney());
    }

    return result;
};

StrategyFour.prototype.getBrandDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountBrands = this.findBrands(cartItems, StrategyFour.brands());
    _.forEach(discountBrands, function(discountBrand) {
        discountInfo += _this.buildBrandDiscountInfo(cartItems, discountBrand);
    });
    return discountInfo;
};

StrategyFour.prototype.buildBrandDiscountInfo = function(cartItems, discountBrand) {

    var newCartItems = _.filter(cartItems, function(cartItem) {
        return cartItem.getBrand() === discountBrand.name;
    });

    var totalMoney = this.getNoPromotionSubtotal(newCartItems);

    var brandDiscount = new BrandDiscount(discountBrand.rate, totalMoney, discountBrand.name);
    this.setBrandPromotion(newCartItems);
    this.savingTotal += brandDiscount.getPromotionMoney();

    return this.buildInfo(brandDiscount.buildPromotionName(), brandDiscount.getPromotionMoney());
};

StrategyFour.prototype.getItemDiscountInfo = function(cartItems) {
    var _this = this;
    var discountInfo = '';
    var discountItems = this.findItems(cartItems, StrategyFour.items());
    _.forEach(discountItems, function(discountItem) {
        discountInfo += _this.buildItemDiscountInfo(cartItems, discountItem);
    });

    return discountInfo;
};

StrategyFour.prototype.buildItemDiscountInfo = function(cartItems, discountItem) {
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

module.exports = StrategyFour;