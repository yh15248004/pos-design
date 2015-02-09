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

module.exports = ItemDiscount;