module.exports = function () {
  if (this.length === 0) return 0;
  return this.reduce((a, c) => a + c) / this.length;
}