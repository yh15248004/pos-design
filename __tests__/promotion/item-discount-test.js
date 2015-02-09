jest.dontMock('../../src/promotion/item-discount');

describe('ItemDiscount', function() {

    var ItemDiscount = require('../../src/promotion/item-discount');
    var discount = new ItemDiscount(0.95, 50.9, '苹果');

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = discount.buildPromotionName();
            expect(result).toBe('苹果单品打折');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = discount.getPromotionMoney();
            expect(result).toBe(2.55);
        });
    });

});