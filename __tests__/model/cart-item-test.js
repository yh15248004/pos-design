jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');

describe('CartItem', function() {

    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');

    beforeEach(function() {
        cartItem = new CartItem(Item.all()[0], 20);
    });

    describe('#getBrand()', function() {
        it('should return correct brand', function() {
            var result = cartItem.getBrand();
            expect(result).toBe('可口可乐');
        });
    });

    describe('#getName()', function() {
        it('should return correct name', function() {
            var result = cartItem.getName();
            expect(result).toBe('可口可乐350ml');
        });
    });

});