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

module.exports = Strategy;