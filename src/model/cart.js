var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');
function Cart() {
    this.cartItems = [];
}

Cart.prototype.addCartItem = function(countItem) {
    var key = _.keys(countItem)[0];
    var item = _.find(Item.all(), {barcode : key});
    this.cartItems.push(new CartItem(item, countItem[key]));
};

Cart.prototype.getPromotionText = function(strategy) {
    return strategy.getPromotionInfo(this.cartItems);
};

Cart.prototype.getCartItemsText = function() {
    var cartItemsText = '';

    _.forEach(this.cartItems,function(cartItem) {
        cartItemsText += cartItem.toCartItemText();
    });

    return cartItemsText;
};

Cart.prototype.getSummaryText = function(strategy) {
    var summaryText = '';
    summaryText += '总计：' + this.getTotalAmount(strategy.savingTotal).toFixed(2) + '(元)\n' +
                   '节省：' +strategy.savingTotal.toFixed(2) + '(元)\n';
    return summaryText;
};

Cart.prototype.getTotalAmount = function(saveMoney) {

    return _.reduce(this.cartItems, function(subtotal, cartItem) {
        return subtotal + cartItem.getSubtotal();
    },0) - saveMoney;

};

module.exports = Cart;