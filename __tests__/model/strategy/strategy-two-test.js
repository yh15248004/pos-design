jest.autoMockOff();

describe('StrategyTwo', function() {

    var StrategyTwo = require('../../../src/model/strategy/strategy-two');
    var Item = require('../../../src/model/item');
    var CartItem = require('../../../src/model/cart-item');
    var DiscountHouse = require('../../../src/model/promotion/discount-house');
    var strategyTwo = new StrategyTwo;

    describe('.getPromotionInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 100),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 50),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20),
            new CartItem(new Item('ITEM000007', '云山荔枝', '个', 5.00, ''), 50)];
        it('should return correct string', function() {
            var result = strategyTwo.getPromotionInfo(cartItems);
            expect(result).toBe('名称：可口可乐350ml单品打折，金额：15.00元\n' +
            '名称：可口可乐品牌打折，金额：4.80元\n' +
            '名称：康师傅品牌满100减2，金额：4.00元\n' +
            '名称：云山荔枝满100减5，金额：10.00元\n');
        });

    });

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