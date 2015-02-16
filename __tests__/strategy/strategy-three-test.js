jest.autoMockOff();

describe('StrategyThree', function() {

    var StrategyThree = require('../../src/strategy/strategy-three');
    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    var DiscountHouse = require('../../src/promotion/discount-house');
    var strategyThree = new StrategyThree;

    describe('.getPromotionInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 100),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 50),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20),
            new CartItem(new Item('ITEM000007', '云山荔枝', '个', 5.00, ''), 50)];
        it('should return correct string', function() {
            var result = strategyThree.getPromotionInfo(cartItems);
            expect(result).toBe('名称：可口可乐350ml单品打折，金额：15.00元\n');
        });

    });

});