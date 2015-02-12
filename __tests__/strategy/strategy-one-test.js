jest.autoMockOff();

describe('StrategyOne', function() {

    var StrategyOne = require('../../src/strategy/strategy-one');
    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    var DiscountHouse = require('../../src/promotion/discount-house');

    describe('.items()', function() {
        var result = StrategyOne.items();

        it('should return correct items', function() {
            expect(result[0].name).toBe('可口可乐350ml');
        });

        it('should return correct num', function() {
            expect(result[0].rate).toBe(0.95);
        });

    });

    describe('.brands()', function() {
        var result = StrategyOne.brands();

        it('should return correct brands', function() {
            expect(result[0].name).toBe('可口可乐');
        });

        it('should return correct num', function() {
            expect(result[0].rate).toBe(0.9);
        });

    });

    describe('.isSyndrome()', function() {
        var cartItem = new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20);
        var brandItems = StrategyOne.brands();

        it('should return correct boolen', function() {
            var result = StrategyOne.isSyndrome(cartItem, brandItems);
            expect(result).toBeTruthy();
        });

    });

    describe('.buildItemDiscountInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];
        var discountItem = StrategyOne.items()[0];

        it('should return correct string', function() {
            var result = StrategyOne.buildItemDiscountInfo(cartItems, discountItem);
            expect(result).toBe('');
        });

    });

    describe('.getItemDiscountInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];

        it('should return correct string', function() {
            var result = StrategyOne.getItemDiscountInfo(cartItems);
            expect(result).toBe('');
        });

    });


});