const ArrayUSA = require('../../ArrayUSA');

module.exports = function () {
  const map = new Map();
  const dups = new ArrayUSA();

  for (let i = 0; i < this.length; i++) {
    const count = map.has(this[i]) ? map.get(this[i]) + 1 : 1;
    map.set(this[i], count);
    if (count === 2) dups.push(this[i]);
  }

  return dups;
}