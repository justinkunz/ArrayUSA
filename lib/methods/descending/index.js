module.exports = function () {
  return this.sort((a, b) => (b - a > 0 ? 1 : a === b ? 0 : -1));
}