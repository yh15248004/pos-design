jest.dontMock('../../src/promotion/brand-discount');
jest.dontMock('../../src/promotion/discount');

describe('BrandDiscount', function() {

    var BrandDiscount = require('../../src/promotion/brand-discount');
    var discount = new BrandDiscount(0.95, 50.9, '苹果');

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = discount.buildPromotionName();
            expect(result).toBe('苹果品牌打折');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = discount.getPromotionMoney();
            expect(result).toBe(2.55);
        });
    });

});