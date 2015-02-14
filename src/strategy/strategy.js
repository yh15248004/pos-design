var _ = require('lodash');

function Strategy() {
    this.savingTotal = 0;
}

Strategy.prototype.buildInfo = function(name, money) {
    return '名称：' + name + '，金额：' + money.toFixed(2) + '元\n';
};

Strategy.prototype.findItems = function(cartItems, items) {
    var result = [];

    _.forEach(cartItems, function(cartItem){
        var item = _.find(items, function(item){
            return item.name === cartItem.getName();});
        if(!!item) {result.push(item);}
    });

    return result;
};

Strategy.prototype.findBrands = function(cartItems, brands) {
    var result = [];

    _.forEach(cartItems, function(cartItem){
        var brand = _.find(brands, function(brand){
            return brand.name === cartItem.getBrand();});
        if(!!brand) {result.push(brand);}
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