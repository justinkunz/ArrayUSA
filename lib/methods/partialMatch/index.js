module.exports = function (obj = {}) {
  const keys = Object.keys(obj);
  return this.find((x) => keys.every((k) => x[k] === obj[k]));
}