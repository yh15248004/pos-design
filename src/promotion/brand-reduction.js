var Reduction = require('./reduction');
function BrandReduction(reachPoint, reduceMoney, subtotal, brand) {
    Reduction.call(this, reachPoint, reduceMoney, subtotal);
    this.brand = brand;
}

BrandReduction.prototype = Object.create(Reduction.prototype);
BrandReduction.prototype.constructor = BrandReduction;

BrandReduction.prototype.buildPromotionName = function() {
    return this.brand + '品牌满' + this.reachPoint + '减' + this.reduceMoney;
};

module.exports = BrandReduction;