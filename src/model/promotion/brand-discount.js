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

module.exports = BrandDiscount;