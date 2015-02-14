jest.autoMockOff();

describe('StrategyTwo', function() {

    var StrategyTwo = require('../../src/strategy/strategy-two');
    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    var DiscountHouse = require('../../src/promotion/discount-house');
    var strategyTwo = new StrategyTwo;

    describe('.buildItemDiscountInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];
        var discountItem = StrategyTwo.items()[0];

        it('should return correct string', function() {
            var result = strategyTwo.buildItemDiscountInfo(cartItems, discountItem);
            expect(result).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n');
        });

    });

    describe('.getItemDiscountInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];

        it('should return correct string', function() {
            var result = strategyTwo.getItemDiscountInfo(cartItems);
            expect(result).toBe('名称：可口可乐350ml单品打折，金额：3.00元\n');
        });

    });

});