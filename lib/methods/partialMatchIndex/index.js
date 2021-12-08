module.exports = function (obj = {}) {
  return this.findIndex((x) => Object.keys(obj).every((k) => x[k] === obj[k]));
}