function ItemDiscount(discount, subtotal, name) {
    this.discount = discount;
    this.subtotal = subtotal;
    this.name = name;
}

ItemDiscount.prototype.buildPromotionName = function() {
    return this.name + '单品打折';
};

ItemDiscount.prototype.getPromotionMoney = function() {
    return 1 * (this.subtotal * (1 - this.discount)).toFixed(2);
};

module.exports = ItemDiscount;