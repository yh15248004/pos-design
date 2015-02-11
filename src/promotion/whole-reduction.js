var Reduction = require('./reduction');
function WholeReduction(reachPoint, reduceMoney, subtotal) {
    Reduction.call(this, reachPoint, reduceMoney, subtotal);
}

WholeReduction.prototype = Object.create(Reduction.prototype);
WholeReduction.prototype.constructor = WholeReduction;

WholeReduction.prototype.buildPromotionName = function() {
    return '满' + this.reachPoint + '减' + this.reduceMoney;
};

module.exports = WholeReduction;