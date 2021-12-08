module.exports = function (oldVal, newVal) {
  return this.map((val) => (val === oldVal ? newVal : val));
}