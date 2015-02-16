jest.dontMock('../../src/promotion/whole-discount');
jest.dontMock('../../src/promotion/discount');

describe('WholeDiscount', function() {

    var WholeDiscount = require('../../src/promotion/whole-discount');
    var discount = new WholeDiscount(0.9, 50.9);

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = discount.buildPromotionName();
            expect(result).toBe(9 + '折');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = discount.getPromotionMoney();
            expect(result).toBe(5.09);
        });
    });

});