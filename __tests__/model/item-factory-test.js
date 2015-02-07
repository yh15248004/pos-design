jest.dontMock('lodash');
jest.dontMock('../../src/model/item-factory');
jest.dontMock('../../src/model/item');
jest.dontMock('../../src/model/cart-item');
jest.dontMock('../../src/model/cart');

describe('ItemFactory', function() {

    var ItemFactory = require('../../src/model/item-factory');
    var Cart = require('../../src/model/cart');

    describe('.createCartItems()', function() {
        var cart = new Cart();
        var countItems = [{ 'ITEM000000' : 20 },
                          { 'ITEM000010' : 2 }];

        it('should return correct count', function() {
            var result = ItemFactory.createCartItems(cart, countItems);
            expect(result[0].count).toEqual(20);
        });

    });

});

