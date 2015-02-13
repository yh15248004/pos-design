jest.autoMockOff();

describe('Cart', function() {
    var CartItem = require('../../src/model/cart-item');
    var Cart = require('../../src/model/cart');
    var Item = require('../../src/model/item');
    var StrategyOne = require('../../src/strategy/strategy-one');
    var cart = new Cart();

    describe('#addCartItem()', function() {

        it('should return correct cartItems', function() {
            cart.addCartItem({ 'ITEM000000' : 20 });
            expect(cart.cartItems[0].count).toEqual(20);
        });

    });

    describe('#getPromotionText()', function() {
        var cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 20),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20)];
        var strategy = new StrategyOne();
        it('should return correct Text', function() {
            cart.cartItems = cartItems;
            var result = cart.getPromotionText(strategy);
            expect(result).toBe('名称：可口可乐品牌打折，金额：10.80元\n');
        });

    });

});