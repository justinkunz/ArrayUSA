module.exports = function () {
  return this.filter((_n, i) => i % 2 === 0);
}