function Discount(discount, subtotal) {
    this.discount = discount;
    this.subtotal = subtotal;
}

Discount.prototype.buildPromotionName = function() {
    return '';
};

Discount.prototype.getPromotionMoney = function() {
    return 0.00;
};

module.exports = Discount;