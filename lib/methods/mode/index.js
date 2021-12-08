module.exports = function () {
  const lens = this.map((item) => this.filter((n) => n === item).length);
  return this[lens.indexOf(Math.max(...lens))];
}