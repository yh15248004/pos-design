var moment = require('moment');

function Inventory(cart) {
    this.cart = cart;
}

Inventory.prototype.toString = function(strategy) {
    return '***<没钱赚商店>购物清单***\n'
        + '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') +
        '\n\n----------------------\n' +
        this.cart.getCartItemsText() +
        '\n----------------------\n' + '优惠信息：\n' +
        this.cart.getPromotionText(strategy) +
        '\n----------------------\n' +
        this.cart.getSummaryText(strategy) +
        '**********************\n';
};

module.exports = Inventory;