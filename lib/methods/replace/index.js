module.exports = function (oldVal, newVal) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === oldVal) this[i] = newVal;
  }
  return this;
}