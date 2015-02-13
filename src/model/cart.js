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

module.exports = Cart;