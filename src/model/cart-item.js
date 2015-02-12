function CartItem(item, count) {
    this.item = item;
    this.count = count || 0;
    this.promotionMoney = 0;
}

CartItem.prototype.getBrand = function() {
    return this.item.brand;
};

CartItem.prototype.getName = function() {
    return this.item.name;
};

CartItem.prototype.getPrice = function() {
    return this.item.price;
};

CartItem.prototype.getUnit = function() {
    return this.item.unit;
};

CartItem.prototype.getSubtotal = function() {
    return this.getPrice() * this.count;
};

module.exports = CartItem;