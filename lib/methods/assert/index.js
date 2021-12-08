module.exports = function (copy) {
  function isEqual(i1, i2) {
    const t1 = Array.isArray(i1) ? 'array' : typeof i1;
    const t2 = Array.isArray(i2) ? 'array' : typeof i2;

    if (t1 !== t2) return false;

    switch (t1) {
      case 'object':
        return isEqualObject(i1, i2);
      case 'array':
        return isArrayEqual(i1, i2);
      case 'function':
      case 'symbol':
        return true;
      default:
        // number, boolean, string, undefined
        return i1 === i2;
    }
  }

  function isEqualObject(o1, o2) {
    if (Object.keys(o1).length !== Object.keys(o2).length) return false;

    return Object.keys(o1)
      .map((k) => isEqual(o1[k], o2[k]))
      .every((result) => !!result);
  }

  function isArrayEqual(og, copy) {
    return og.map((item, index) => isEqual(item, copy[index])).every((result) => !!result);
  }

  return isArrayEqual(this, copy);
}