var _ = require('lodash');

function Strategy() {
    this.savingTotal = 0;
}

Strategy.prototype.buildInfo = function(name, money) {
    return '名称：' + name + '，金额：' + money.toFixed(2) + '元\n';
};

Strategy.prototype.findDiscountItems = function(cartItems, discountItems) {
    var result = [];

    _.forEach(cartItems, function(cartItem){
        var discountItem = _.find(discountItems, function(discountItem){
            return discountItem.name === cartItem.getName();});
        if(!!discountItem) {result.push(discountItem);}
    });

    return result;
};

Strategy.prototype.findDiscountBrands = function(cartItems, discountBrands) {
    var result = [];

    _.forEach(cartItems, function(cartItem){
        var discountBrand = _.find(discountBrands, function(discountBrand){
            return discountBrand.name === cartItem.getBrand();});
        if(!!discountBrand) {result.push(discountBrand);}
    });

    result = _.intersection(result);
    return result;

};

Strategy.prototype.getNoPromotionSubtotal = function(cartItems) {
    return _.reduce(cartItems, function(subtotal, cartItem) {
        return subtotal + cartItem.getSubtotal();
    },0);
};

Strategy.prototype.setBrandPromotion = function(cartItems) {
    _.forEach(cartItems, function(cartItem) {
        cartItem.isPromotion = true;
    });
};

module.exports = Strategy;