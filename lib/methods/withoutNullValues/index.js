module.exports = function () {
  return this.filter((x) => x !== null && x !== undefined && x !== '');
}