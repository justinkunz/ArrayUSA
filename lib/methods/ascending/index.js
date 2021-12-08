module.exports = function () {
  return this.sort((a, b) => (a - b > 0 ? 1 : a === b ? 0 : -1));
}