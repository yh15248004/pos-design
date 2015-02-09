var Discount = require('./discount');
function ItemDiscount(discount, subtotal, name) {
    Discount.call(this, discount, subtotal);
    this.name = name;
}

ItemDiscount.prototype = Object.create(Discount.prototype);
ItemDiscount.prototype.constructor = ItemDiscount;

ItemDiscount.prototype.buildPromotionName = function() {
    return this.name + '单品打折';
};

ItemDiscount.prototype.getPromotionMoney = function() {
    return 1 * (this.subtotal * (1 - this.discount)).toFixed(2);
};

module.exports = ItemDiscount;