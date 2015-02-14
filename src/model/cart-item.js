function CartItem(item, count) {
    this.item = item;
    this.count = count || 0;
    this.isPromotion = false;
}

CartItem.prototype.toCartItemText = function() {
    return '名称：' + this.item.name +
        '，数量：' + this.count + this.item.unit +
        '，单价：' + this.item.price.toFixed(2) +
        '(元)，小计：' + this.getSubtotal().toFixed(2) + '(元)\n';
};

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