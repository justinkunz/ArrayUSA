module.exports = function (base = 10) {
  return this.map((item) => parseFloat(item, base));
}