jest.autoMockOff();

describe('StrategyOne', function() {

    var StrategyOne = require('../../src/strategy/strategy-one');
    var DiscountHouse = require('../../src/promotion/discount-house');

    describe('items()', function() {
        var result = StrategyOne.items();

        it('should return correct items', function() {
            expect(result[0].name).toBe('可口可乐350ml');
        });

        it('should return correct num', function() {
            expect(result[0].rate).toBe(0.95);
        });

    });

});