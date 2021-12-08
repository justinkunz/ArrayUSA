module.exports = function () {
  return this.length % 2 === 0
    ? (this[this.length / 2 - 1] + this[this.length / 2]) / 2
    : this[Math.floor(this.length / 2)];
}