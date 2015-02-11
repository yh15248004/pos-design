jest.dontMock('lodash');
jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');
jest.dontMock('../../src/model/cart');

describe('Cart', function() {
    var Cart = require('../../src/model/cart');
    var Item = require('../../src/model/item');

    describe('#addCartItem()', function() {

        var cart = new Cart();
        it('should return correct cartItems', function() {
            cart.addCartItem({ 'ITEM000000' : 20 });
            expect(cart.cartItems[0].count).toEqual(20);
        });

    });

});