function applyDiscount(total, discountPercentage) {

    if (discountPercentage > 100 || discountPercentage < 0) throw new Error("Invalid discount");
  
    return total - total * (discountPercentage / 100);
  
  }
module.exports = applyDiscount;