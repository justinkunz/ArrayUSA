module.exports = function (condition) {
  return this.reduce((acc, val) => {
    if (condition(val)) acc++;
    return acc;
  }, 0);
};
