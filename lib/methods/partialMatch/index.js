module.exports = function (obj = {}) {
  return this.find((x) => Object.keys(obj).every((k) => x[k] === obj[k]));
}