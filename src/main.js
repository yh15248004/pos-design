var StrategyRunner = require('./strategy/strategy-runner');
var Cart = require('./model/cart');
var ItemFactory = require('./model/item-factory');
var Inventory = require('./model/inventory');

(function printInventory() {

    var countItems = [
        { 'ITEM000000' : 20 },
        { 'ITEM000010' : 20 },
        { 'ITEM000005' : 30 },
        { 'ITEM000008' : 25 },
        { 'ITEM000003' : 8  },
        { 'ITEM000002' : 14 }
    ];
    var strategyType = 2;
    var strategy = StrategyRunner.getStrategy(strategyType);
    var cart = new Cart();
    ItemFactory.createCartItems(cart, countItems);
    var inventory = new Inventory(cart);
    console.log(inventory.toString(strategy));
})();