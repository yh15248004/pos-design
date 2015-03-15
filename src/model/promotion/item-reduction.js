var Reduction = require('./reduction');
function ItemReduction(reachPoint, reduceMoney, subtotal, name) {
    Reduction.call(this, reachPoint, reduceMoney, subtotal);
    this.name = name;
}

ItemReduction.prototype = Object.create(Reduction.prototype);
ItemReduction.prototype.constructor = ItemReduction;

ItemReduction.prototype.buildPromotionName = function() {
    return this.name + '满' + this.reachPoint + '减' + this.reduceMoney;
};

module.exports = ItemReduction;