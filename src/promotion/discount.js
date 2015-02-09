function Discount(discount, subtotal) {
    this.discount = discount;
    this.subtotal = subtotal;
}

Discount.prototype.buildPromotionName = function() {
    return '';
};

Discount.prototype.getPromotionMoney = function() {
    return 1.01;
};

module.exports = Discount;