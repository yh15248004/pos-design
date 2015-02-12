function Strategy() {
}

Strategy.buildInfo = function(name, money) {
    return '名称：' + name + '，金额：' + money + '元';
};

module.exports = Strategy;