function ItemDiscount(name, discount) {
    this.name = name;
    this.discount = discount;
}

ItemDiscount.prototype.buildPromotionName = function() {
    return this.name + '单品打折';
};

ItemDiscount.prototype.getPromotionMoney = function() {
    
};

module.exports = ItemDiscount;