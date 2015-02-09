var Discount = require('./discount');
function BrandDiscount(discount, subtotal, brand) {
    Discount.call(this, discount, subtotal);
    this.brand = brand;
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;

BrandDiscount.prototype.buildPromotionName = function() {
    return this.brand + '品牌打折';
};

BrandDiscount.prototype.getPromotionMoney = function() {
    return 1 * (this.subtotal * (1 - this.discount)).toFixed(2);
};

module.exports = BrandDiscount;