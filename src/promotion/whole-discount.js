var Discount = require('./discount');
function WholeDiscount(discount, subtotal, num) {
    Discount.call(this, discount, subtotal);
    this.num = num;
}

WholeDiscount.prototype = Object.create(Discount.prototype);
WholeDiscount.prototype.constructor = WholeDiscount;

WholeDiscount.prototype.buildPromotionName = function() {
    return this.num + '折';
};

module.exports = WholeDiscount;