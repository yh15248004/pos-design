var _ = require('lodash');
var Item = require('./item');
function Cart() {
    this.cartItems = [];
}

Cart.prototype.addCartItem = function(countItem) {
    var key = _.keys(countItem)[0];
    var item = _.find(Item.all(), {barcode : key});
    this.cartItems.push(item, countItem[key]);
};

module.exports = Cart;