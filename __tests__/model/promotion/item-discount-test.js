jest.dontMock('../../../src/model/promotion/item-discount');
jest.dontMock('../../../src/model/promotion/discount');

describe('ItemDiscount', function() {

    var ItemDiscount = require('../../../src/model/promotion/item-discount');
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