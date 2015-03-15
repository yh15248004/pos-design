var Discount = require('./discount');
function WholeDiscount(discount, subtotal) {
    Discount.call(this, discount, subtotal);
}

WholeDiscount.prototype = Object.create(Discount.prototype);
WholeDiscount.prototype.constructor = WholeDiscount;

WholeDiscount.prototype.buildPromotionName = function() {
    return this.discount * 10 + '折';
};

module.exports = WholeDiscount;