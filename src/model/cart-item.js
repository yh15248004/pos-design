function CartItem(item, count) {
    this.item = item;
    this.count = count || 0;
}

CartItem.prototype.getBrand = function() {
    return this.item.brand;
};

CartItem.prototype.getName = function() {
    return this.item.name;
};

module.exports = CartItem;