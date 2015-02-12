jest.autoMockOff();

describe('StrategyOne', function() {

    var StrategyOne = require('../../src/strategy/strategy-one');
    var Item = require('../../src/model/item');
    var CartItem = require('../../src/model/cart-item');
    var DiscountHouse = require('../../src/promotion/discount-house');

    describe('.getPromotionInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 100),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 20),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20)];
        var strategyOne = new StrategyOne();
        it('should return correct string', function() {
            var result = strategyOne.getPromotionInfo(cartItems);
            expect(result).toBe('名称：可口可乐品牌打折，金额：34.80元');
        });

    });

    describe('.getWholeReductionInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 100),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 10),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 20),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20)];
        it('should return correct string', function() {
            var result = StrategyOne.getWholeReductionInfo(cartItems);
            expect(result).toBe('名称：满100减3，金额：9.00元\n');
        });

    });

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

    describe('.buildBrandDiscountInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];
        var discountBrand = StrategyOne.brands()[0];

        it('should return correct string', function() {
            var result = StrategyOne.buildBrandDiscountInfo(cartItems, discountBrand);
            expect(result).toBe('名称：可口可乐品牌打折，金额：10.80元\n');
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

    describe('.getBrandDiscountInfo()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12)];

        it('should return correct string', function() {
            var result = StrategyOne.getBrandDiscountInfo(cartItems);
            expect(result).toBe('名称：可口可乐品牌打折，金额：10.80元\n');
        });

    });
    describe('.findWholeReductionCartItem()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 20),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20)];
        var name = '康师傅方便面';
        it('should return correct string', function() {
            var result = StrategyOne.findWholeReductionCartItem(cartItems, name);
            expect(result.length).toBe(3);
        });
    });

});