var _ = require('lodash');
var Cart = require('./cart');
function ItemFactory() {
}

ItemFactory.createCartItem = function(cart, countItems) {

    _.forEach(countItems, function(countItem) {
        cart.addCartItem(countItem);
    });

    return cart.cartItems;
};

module.exports = ItemFactory;