jest.autoMockOff();

describe('StrategyFour', function() {

    var StrategyFour = require('../../../src/model/strategy/strategy-four');
    var Item = require('../../../src/model/item');
    var CartItem = require('../../../src/model/cart-item');
    var strategyFour = new StrategyFour;

    describe('.getPromotionInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 100),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '果粒橙', '瓶', 3.50, '康师傅'), 50),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20),
            new CartItem(new Item('ITEM000007', '云山苹果', '个', 5.00, '云山'), 50)];
        it('should return correct string', function() {
            var result = strategyFour.getPromotionInfo(cartItems);
            expect(result).toBe('名称：可口可乐350ml单品打折，金额：15.00元\n' +
            '名称：可口可乐品牌打折，金额：34.80元\n' +
            '名称：果粒橙满100减5，金额：5.00元\n' +
            '名称：云山品牌满100减2，金额：4.00元\n' +
            '名称：9折，金额：73.42元\n');
        });

    });

});