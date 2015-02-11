jest.autoMockOff();

describe('StrategyOne', function() {

    var StrategyOne = require('../../src/strategy/strategy-one');
    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    var DiscountHouse = require('../../src/promotion/discount-house');

    describe('items()', function() {
        var result = StrategyOne.items();

        it('should return correct items', function() {
            expect(result[0].name).toBe('可口可乐350ml');
        });

        it('should return correct num', function() {
            expect(result[0].rate).toBe(0.95);
        });

    });

    describe('.findDiscountItems()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];

        it('should return correct discountItems', function() {
            var result = StrategyOne.findDiscountItems(cartItems);
            expect(result).toBe([{name: '可口可乐350ml', rate: 0.95}]);
        });

    });

});