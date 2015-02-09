function Reduction(reachPoint, reduceMoney, subtotal) {
    this.reachPoint = reachPoint;
    this.reduceMoney = reduceMoney;
    this.subtotal = subtotal;
}

Reduction.prototype.buildPromotionName = function() {
    return '';
};

Reduction.prototype.getPromotionMoney = function() {
    return 1 * (Math.floor(this.subtotal/this.reachPoint) * this.reduceMoney).toFixed(2);
};

module.exports = Reduction;