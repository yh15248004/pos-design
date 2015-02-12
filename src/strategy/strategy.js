var _ = require('lodash');

function Strategy() {
}

Strategy.buildInfo = function(name, money) {
    return '名称：' + name + '，金额：' + money.toFixed(2) + '元';
};

Strategy.findDiscountItems = function(cartItems, discountItems) {
    var result = [];

    _.forEach(cartItems, function(cartItem){
        var discountItem = _.find(discountItems, function(discountItem){
            return discountItem.name === cartItem.getName();});
        if(!!discountItem) {result.push(discountItem);}
    });

    return result;
};

Strategy.findDiscountBrands = function(cartItems, discountBrands) {
    var result = [];

    _.forEach(cartItems, function(cartItem){
        var discountBrand = _.find(discountBrands, function(discountBrand){
            return discountBrand.name === cartItem.getBrand();});
        if(!!discountBrand) {result.push(discountBrand);}
    });

    result = _.intersection(result);
    return result;

};

Strategy.getNoPromotionSubtotal = function(cartItems) {
    return _.reduce(cartItems, function(subtotal, cartItem) {
        return subtotal + cartItem.getSubtotal();
    },0);
};

Strategy.setBrandPromotionMoney = function(cartItems, totalPromotionMoney) {
    _.forEach(cartItems, function(cartItem) {
        cartItem.promotionMoney = totalPromotionMoney / cartItems.length;
    });
};

module.exports = Strategy;