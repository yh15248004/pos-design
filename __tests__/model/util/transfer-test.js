jest.autoMockOff();


describe('Transfer', function() {

    describe('.transToHanzi()', function() {
        it('should return correct character', function() {
            var Transfer = require('../../../src/model/util/transfer');
            var result = Transfer.transToHanzi(99);
            expect(result).toBe('九九');

            //var jsonString = fs.readFile();
            //console.log(JSON.parse(jsonString).name);
        });
    });

});