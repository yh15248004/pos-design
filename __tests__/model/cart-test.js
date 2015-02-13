jest.autoMockOff();

describe('Cart', function() {
    var CartItem = require('../../src/model/cart-item');
    var Cart = require('../../src/model/cart');
    var Item = require('../../src/model/item');
    var StrategyOne = require('../../src/strategy/strategy-one');
    var cart;
    var cartItems;

    beforeEach(function() {
        cart = new Cart();
        cartItems = [new CartItem(new Item('ITEM000000', '可口可乐350ml', '瓶', 3.00, '可口可乐'), 20),
            new CartItem(new Item('ITEM000010', '可口可乐550ml', '瓶', 4.00, '可口可乐'), 12),
            new CartItem(new Item('ITEM000005', '康师傅方便面', '袋', 4.50, '康师傅'), 20),
            new CartItem(new Item('ITEM000006', '羽毛球', '个', 1.00, ''), 20)];
    });

    describe('#addCartItem()', function() {

        it('should return correct cartItems', function() {
            cart.addCartItem({ 'ITEM000000' : 20 });
            expect(cart.cartItems[0].count).toEqual(20);
        });

    });

    describe('#getPromotionText()', function() {

        var strategy = new StrategyOne();
        it('should return correct Text', function() {
            cart.cartItems = cartItems;
            var result = cart.getPromotionText(strategy);
            expect(result).toBe('名称：可口可乐品牌打折，金额：10.80元\n');
        });

    });

    describe('#getCartItemsText()', function() {

        it('should return correct string', function() {
            cart.cartItems = cartItems;
            var result = cart.getCartItemsText();
            expect(result).toBe('名称：可口可乐350ml，数量：20瓶，单价：3.00(元)，小计：60.00(元)\n' +
            '名称：可口可乐550ml，数量：12瓶，单价：4.00(元)，小计：48.00(元)\n' +
            '名称：康师傅方便面，数量：20袋，单价：4.50(元)，小计：90.00(元)\n' +
            '名称：羽毛球，数量：20个，单价：1.00(元)，小计：20.00(元)\n');
        });

    });

});