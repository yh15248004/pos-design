jest.dontMock('../../../src/model/promotion/reduction');
jest.dontMock('../../../src/model/promotion/whole-reduction');

describe('WholeReduction', function() {

    var WholeReduction = require('../../../src/model/promotion/whole-reduction');
    var reduction = new WholeReduction(100, 5, 599);

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = reduction.buildPromotionName();
            expect(result).toBe('满100减5');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = reduction.getPromotionMoney();
            expect(result).toEqual(25);
        });
    });

});