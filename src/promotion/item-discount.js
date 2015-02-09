function ItemDiscount(name, discount, subtotal) {
    this.name = name;
    this.discount = discount;
    this.subtotal = subtotal;
}

ItemDiscount.prototype.buildPromotionName = function() {
    return this.name + '单品打折';
};

ItemDiscount.prototype.getPromotionMoney = function() {
    return this.subtotal * (1 - this.discount).toFixed(2);
};

module.exports = ItemDiscount;