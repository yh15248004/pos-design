jest.dontMock('../../src/promotion/reduction');

describe('Reduction', function() {

    var Reduction = require('../../src/promotion/reduction');
    var reduction = new Reduction(100, 5, 599);

    describe('#buildPromotionName()', function() {
        it('should return correct string', function() {
            var result = reduction.buildPromotionName();
            expect(result).toBe('');
        });
    });

    describe('#getPromotionMoney()', function() {
        it('should return correct number', function() {
            var result = reduction.getPromotionMoney();
            expect(result).toEqual('25.00');
        });
    });

});