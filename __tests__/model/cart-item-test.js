jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');

describe('CartItem', function() {

    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    var cartItem;
    
    beforeEach(function() {
        cartItem = new CartItem(Item.all()[0], 20);
    });

    describe('.toCartItemText()', function() {
        it('should return correct text', function() {
            var result = cartItem.toCartItemText();
            expect(result).toBe('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n');
        });
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