jest.dontMock('lodash');
jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart');

describe('Cart', function() {
    var Cart = require('../../src/model/cart');
    var Item = require('../../src/model/item');

    describe('#addCartItem()', function() {

        var cart = new Cart();
        it('should return correct cartItems', function() {
            cart.addCartItem({ 'ITEM000000' : 20 });
            expect(cart.cartItems).toEqual([{barcode : 'ITEM000000', name : '可口可乐350ml', util : '瓶', price : 3.00, brand : '可口可乐'}, 20]);
        });

    });

});