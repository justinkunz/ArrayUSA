module.exports = function () {
  const map = new Map();

  const mode = {
    count: -Infinity,
    element: undefined,
  }

  for (let i = 0; i < this.length; i++) {
    const count = map.has(this[i]) ? map.get(this[i]) + 1 : 1;
    map.set(this[i], count);

    if (count > mode.count) {
      mode.count = count;
      mode.element = this[i];
    }
  }

  return mode.element;
}