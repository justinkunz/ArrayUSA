const methods = require('./methods');
class ArrayUSA extends Array {}

// ARRAYUSA_PROTOS

const arrayUSA = (arr) => new ArrayUSA(...arr);

arrayUSA.protos = () => {
  // ARRAY_PROTOS
};

arrayUSA.withLength = (n = 0) => new ArrayUSA(Array.apply(null, Array(n)));

module.exports = arrayUSA;
