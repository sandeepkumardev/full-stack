function exDollor(rate) {
  return function convertToRupees(rupees) {
    return rupees / rate;
  };
}

var convertToRupees = exDollor(84.03);
console.log(convertToRupees(1000));
