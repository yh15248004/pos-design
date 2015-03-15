jest.dontMock('../../../src/model/promotion/reduction');
jest.dontMock('../../../src/model/promotion/brand-reduction');

describe('BrandReduction', function() {

    var BrandReduction = require('../../../src/model/promotion/brand-reduction');
    var reduction = new BrandReduction(100, 5, 599, '可口可乐');

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = reduction.buildPromotionName();
            expect(result).toBe('可口可乐品牌满100减5');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = reduction.getPromotionMoney();
            expect(result).toEqual(25);
        });
    });

});