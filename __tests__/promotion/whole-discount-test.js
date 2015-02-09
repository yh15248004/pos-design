jest.dontMock('../../src/promotion/whole-discount');
jest.dontMock('../../src/promotion/discount');

describe('WholeDiscount', function() {

    var WholeDiscount = require('../../src/promotion/whole-discount');
    var discount = new WholeDiscount(0.95, 50.9, '九');

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = discount.buildPromotionName();
            expect(result).toBe('九折');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = discount.getPromotionMoney();
            expect(result).toBe(2.55);
        });
    });

});