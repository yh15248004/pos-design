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

    describe('#getPrice()', function() {
        it('should return correct Price', function() {
            var result = cartItem.getPrice();
            expect(result).toBe(3);
        });
    });

    describe('#getUnit()', function() {
        it('should return correct unit', function() {
            var result = cartItem.getUnit();
            expect(result).toBe('瓶');
        });
    });

    describe('#getSubtotal()', function() {
        it('should return correct price', function() {
            var result = cartItem.getSubtotal();
            expect(result).toBe(60);
        });
    });

});