jest.dontMock('../../src/strategy/strategy');

describe('Strategy', function() {
    var Strategy = require('../../src/strategy/strategy');
    describe('.buildInfo()', function() {

        it('should return correct string', function() {
            var name = '可口可乐';
            var money = 3;
            var result = Strategy.buildInfo(name, money);
            expect(result).toBe('名称：可口可乐，金额：3.00元');
        });

    });
});