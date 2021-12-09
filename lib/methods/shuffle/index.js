const ArrayUSA = require('../../ArrayUSA');

module.exports = function () {
  const arr = new ArrayUSA(...this);
  for (let i = 0; i < this.length; i++) {
    const switchPosition = Math.floor(Math.random() * arr.length);
    const tmp = arr[switchPosition];
    arr[switchPosition] = arr[i];
    arr[i] = tmp;
  }
  return arr;
};
