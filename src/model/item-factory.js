var _ = require('lodash');
var Cart = require('./cart');
function ItemFactory() {
}

ItemFactory.createCartItem = function(countItems) {
    
    var cart = new Cart();
    _.forEach(countItems, function(countItem) {
        cart.addCartItem(countItem);
    });

    return cart.cartItems;
};

module.exports = ItemFactory;