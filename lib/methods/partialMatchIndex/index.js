module.exports = function (obj = {}) {
  const keys = Object.keys(obj);
  return this.findIndex((x) => keys.every((k) => x[k] === obj[k]));
}