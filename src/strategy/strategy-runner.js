var StrategyOne = require('./strategy-one');
var StrategyTwo = require('./strategy-two');
var StrategyThree = require('./strategy-three');
var StrategyFour = require('./strategy-four');
var NoStrategy = require('./no-strategy');

function StrategyRunner() {
}

StrategyRunner.getStrategy = function(strategyType) {
    var result = new NoStrategy();

    if(strategyType === 1) {
        result = new StrategyOne();
    } else if(strategyType === 2) {
        result = new StrategyTwo();
    } else if(strategyType === 3) {
        result = new StrategyThree();
    } else if(strategyType === 4) {
        result = new StrategyFour();
    }

    return result;
};

module.exports = StrategyRunner;