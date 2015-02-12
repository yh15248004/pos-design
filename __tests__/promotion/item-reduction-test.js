jest.dontMock('../../src/promotion/reduction');
jest.dontMock('../../src/promotion/item-reduction');

describe('ItemReduction', function() {

    var ItemReduction = require('../../src/promotion/item-reduction');
    var reduction = new ItemReduction(100, 5, 599, '可口可乐');

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = reduction.buildPromotionName();
            expect(result).toBe('可口可乐满100减5');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = reduction.getPromotionMoney();
            expect(result).toEqual(25);
        });
    });

});