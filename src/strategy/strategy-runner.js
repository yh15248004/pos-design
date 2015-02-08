var StrategyOne = require('./strategy-one');
var StrategyTwo = require('./strategy-two');
var StrategyThree = require('./strategy-three');
var StrategyFour = require('./strategy-four');
var NoStrategy = require('./no-strategy');


function StrategyRunner() {
}

StrategyRunner.getStrategy = function(strategyType, cartItems) {
    var result = new NoStrategy(cartItems);

    if(strategyType === 1) {
        result = new StrategyOne(cartItems);
    } else if(strategyType === 2) {
        result = new StrategyTwo(cartItems);
    } else if(strategyType === 3) {
        result = new StrategyThree(cartItems);
    } else if(strategyType === 4) {
        result = new StrategyFour(cartItems);
    }

    return result;
};

module.exports = StrategyRunner;