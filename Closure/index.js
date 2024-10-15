/*function outer(b) {
  var a = 2;

  return function inner() {
    var mul = a * b;
    return mul;
  };
}
const res = outer(5);
console.log(res());
*/
function ExDoller(rate) {
  return function ConvertToRupees(Rupees) {
    return Rupees / rate;
  };
  return function ConvertToRiyal(Riyal) {
    return Riyal / rate;
  };

  return function ConvertToEuro(Euro) {
    return Riyal / rate;
  };

  return function ConvertToPakRupees(PakRupees) {
    return PakRupees / rate;
  };
}
const ConvertToRupees = ExDoller(84.03);
console.log(ConvertToRupees(1000));

const ConvertToRiyal = ExDoller(50);
console.log(ConvertToRiyal(1000));

const ConvertToEuro = ExDoller(23);
console.log(ConvertToEuro(1000));

const ConvertToPakRupees = ExDoller(100);
console.log(ConvertToPakRupees(1000));
