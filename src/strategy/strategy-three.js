var _ = require('lodash');
var Strategy = require('./strategy');
var DiscountHouse = require('../promotion/discount-house');
var ReductionHouse = require('../promotion/reduction-house');
var ItemDiscount = require('../promotion/item-discount');
var BrandDiscount = require('../promotion/brand-discount');
var ItemReduction = require('../promotion/item-reduction');
var BrandReduction = require('../promotion/brand-reduction');
function StrategyThree() {
    this.savingTotal =0;
}
StrategyThree.prototype = Object.create(Strategy.prototype);
StrategyThree.prototype.constructor = StrategyThree;

StrategyThree.prototype.getPromotionInfo = function(cartItems) {
    var promotionInfo = '';

    promotionInfo += this.getItemDiscountInfo(cartItems);
    //promotionInfo += this.getBrandDiscountInfo(cartItems);
    //promotionInfo += this.getBrandReductionInfo(cartItems);
    //promotionInfo += this.getWholeReductionInfo(cartItems);

    return promotionInfo;
};

StrategyThree.items =function() {
    return [new DiscountHouse('可口可乐350ml', 0.95)];
};

StrategyThree.brands =function() {
    return [new DiscountHouse('可口可乐', 0.9)];
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