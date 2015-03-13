var StrategyOne = require('./strategy-one');
var StrategyTwo = require('./strategy-two');
var StrategyThree = require('./strategy-three');
var StrategyFour = require('./strategy-four');
var NoStrategy = require('./no-strategy');

function StrategyRunner() {
}

StrategyRunner.getStrategy = function(strategyType) {
    var result = new NoStrategy();

    switch (strategyType) {
        case 1 :
            result = new StrategyOne();
            break;
        case 2 :
            result = new StrategyTwo();
            break;
        case 3 :
            result = new StrategyThree();
            break;
        case 4 :
            result = new StrategyFour();
            break;
    }

    return result;
};

module.exports = StrategyRunner;