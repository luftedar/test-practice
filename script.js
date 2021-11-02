const stringLength = (str) => str.length > 1 ? str.length : str.length <= 10 ? str.length : console.log('Not between 1 and 10');

const reverseString = (str) => str.split("").reverse().join("");

const calculator = {
  add: (x,y) => x+y,
  substract: (x,y) => x-y,
  divide: (x,y) => x/y,
  multiply: (x,y) => x*y 
}

const capitalize = (str) => [str[0].toUpperCase(),...[str.split("").splice(1,str.length)]].join("");
console.log(capitalize('orcun'));
exports.stringLength = stringLength;
exports.reverseString = reverseString;
exports.calculator = calculator;
exports.capitalize = capitalize;