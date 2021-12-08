const methods = require('./methods');

class ArrayUSA extends Array {}

ArrayUSA.prototype.ascending = methods.ascending;
ArrayUSA.prototype.assert = methods.assert;
ArrayUSA.prototype.batch = methods.batch;
ArrayUSA.prototype.copy = methods.copy;
ArrayUSA.prototype.countIf = methods.countIf;
ArrayUSA.prototype.countOf = methods.countOf;
ArrayUSA.prototype.deepCopy = methods.deepCopy;
ArrayUSA.prototype.descending = methods.descending;
ArrayUSA.prototype.difference = methods.difference;
ArrayUSA.prototype.evenIndexes = methods.evenIndexes;
ArrayUSA.prototype.filterType = methods.filterType;
ArrayUSA.prototype.isEmpty = methods.isEmpty;
ArrayUSA.prototype.last = methods.last;
ArrayUSA.prototype.mean = methods.mean;
ArrayUSA.prototype.median = methods.median;
ArrayUSA.prototype.mode = methods.mode;
ArrayUSA.prototype.oddIndexes = methods.oddIndexes;
ArrayUSA.prototype.onlyDuplicates = methods.onlyDuplicates;
ArrayUSA.prototype.partialMatch = methods.partialMatch;
ArrayUSA.prototype.partialMatchIndex = methods.partialMatchIndex;
ArrayUSA.prototype.product = methods.product;
ArrayUSA.prototype.quotient = methods.quotient;
ArrayUSA.prototype.random = methods.random;
ArrayUSA.prototype.randomIndex = methods.randomIndex;
ArrayUSA.prototype.replace = methods.replace;
ArrayUSA.prototype.shuffle = methods.shuffle;
ArrayUSA.prototype.sum = methods.sum;
ArrayUSA.prototype.toNum = methods.toNum;
ArrayUSA.prototype.toObject = methods.toObject;
ArrayUSA.prototype.toStr = methods.toStr;
ArrayUSA.prototype.types = methods.types;
ArrayUSA.prototype.withoutDuplicates = methods.withoutDuplicates;
ArrayUSA.prototype.withoutFalsyValues = methods.withoutFalsyValues;
ArrayUSA.prototype.withoutNullValues = methods.withoutNullValues;

const arrayUSA = (arr) => new ArrayUSA(...arr);

arrayUSA.protos = () => {
  Array.prototype.ascending = methods.ascending;
  Array.prototype.assert = methods.assert;
  Array.prototype.batch = methods.batch;
  Array.prototype.copy = methods.copy;
  Array.prototype.countIf = methods.countIf;
  Array.prototype.countOf = methods.countOf;
  Array.prototype.deepCopy = methods.deepCopy;
  Array.prototype.descending = methods.descending;
  Array.prototype.difference = methods.difference;
  Array.prototype.evenIndexes = methods.evenIndexes;
  Array.prototype.filterType = methods.filterType;
  Array.prototype.isEmpty = methods.isEmpty;
  Array.prototype.last = methods.last;
  Array.prototype.mean = methods.mean;
  Array.prototype.median = methods.median;
  Array.prototype.mode = methods.mode;
  Array.prototype.oddIndexes = methods.oddIndexes;
  Array.prototype.onlyDuplicates = methods.onlyDuplicates;
  Array.prototype.partialMatch = methods.partialMatch;
  Array.prototype.partialMatchIndex = methods.partialMatchIndex;
  Array.prototype.product = methods.product;
  Array.prototype.quotient = methods.quotient;
  Array.prototype.random = methods.random;
  Array.prototype.randomIndex = methods.randomIndex;
  Array.prototype.replace = methods.replace;
  Array.prototype.shuffle = methods.shuffle;
  Array.prototype.sum = methods.sum;
  Array.prototype.toNum = methods.toNum;
  Array.prototype.toObject = methods.toObject;
  Array.prototype.toStr = methods.toStr;
  Array.prototype.types = methods.types;
  Array.prototype.withoutDuplicates = methods.withoutDuplicates;
  Array.prototype.withoutFalsyValues = methods.withoutFalsyValues;
  Array.prototype.withoutNullValues = methods.withoutNullValues;
};

arrayUSA.withLength = (n = 0) => new ArrayUSA(Array.apply(null, Array(n)));

module.exports = arrayUSA;