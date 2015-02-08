jest.autoMockOff();

describe('StrategyRunner', function() {
    var StrategyRunner = require('../../src/strategy/strategy-runner');
    describe('.getStrategy()', function() {

        it('should return correct strategy', function() {
            var strategyType = 5;
            var cartItems = '111';
            var result = StrategyRunner.getStrategy(strategyType, cartItems);
            expect(result.cartItems).toBe(111);
        });

    });

});