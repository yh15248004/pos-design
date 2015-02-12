jest.autoMockOff();

describe('Strategy', function() {
    var Strategy = require('../../src/strategy/strategy');
    var StrategyOne = require('../../src/strategy/strategy-one');
    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    describe('.buildInfo()', function() {

        it('should return correct string', function() {
            var name = '可口可乐';
            var money = 3;
            var result = Strategy.buildInfo(name, money);
            expect(result).toBe('名称：可口可乐，金额：3.00元\n');
        });

    });

    describe('.findDiscountItems()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];

        it('should return correct string', function() {
            var result = Strategy.findDiscountItems(cartItems, StrategyOne.items());
            expect(result[0].name).toBe('可口可乐350ml');
        });

        it('should return correct num', function() {
            var result = Strategy.findDiscountItems(cartItems, StrategyOne.items());
            expect(result[0].rate).toBe(0.95);
        });

    });

    describe('.findDiscountBrands()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];

        it('should return correct string', function() {
            var result = Strategy.findDiscountBrands(cartItems, StrategyOne.brands());
            expect(result[0].name).toBe('可口可乐');
        });

        it('should return correct num', function() {
            var result = Strategy.findDiscountBrands(cartItems, StrategyOne.brands());
            expect(result[0].rate).toBe(0.9);
        });

    });

    describe('.getNoPromotionSubtotal()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];
        it('should return correct money', function() {
            var result = Strategy.getNoPromotionSubtotal(cartItems);
            expect(result).toBe(108);
        });
    });

    describe('.setBrandPromotionMoney()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];
        var money = 10.8;
        it('should return correct money', function() {
            Strategy.setBrandPromotionMoney(cartItems, money);
            expect(cartItems[0].promotionMoney).toBe(5.4);
        });
    });

});