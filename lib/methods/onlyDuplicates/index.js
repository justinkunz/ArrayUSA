module.exports = function () {
  return this.filter((ele, i) => this.indexOf(ele) !== i);
}